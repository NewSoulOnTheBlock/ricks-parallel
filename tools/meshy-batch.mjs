#!/usr/bin/env node
// Batch-generate textured game-ready models with the Meshy API.
//
//   MESHY_API_KEY=msy_... node tools/meshy-batch.mjs tools/asset-batch-01.json [--only a,b] [--concurrency 5]
//
// Each asset costs 15 credits: a Smart Topology preview (5) plus a PBR texture refine (10).
// Progress is written to assets/models/manifest.json after every step, so the script can be
// re-run safely: an asset that already has a task id is resumed, never created twice.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const KEY = process.env.MESHY_API_KEY
if (!KEY) { console.error('Set MESHY_API_KEY'); process.exit(1) }

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'assets', 'models')
const THUMBS = join(OUT, 'thumbs')
const MANIFEST = join(OUT, 'manifest.json')
const API = 'https://api.meshy.ai/openapi/v2/text-to-3d'
const STYLE = 'Stylized PBR game asset, clean readable shapes, slightly worn, single isolated object.'

const args = process.argv.slice(2)
const flag = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d }
const listFile = args.find(a => a.endsWith('.json'))
const only = flag('--only', null)?.split(',')
const concurrency = Number(flag('--concurrency', 5))

mkdirSync(THUMBS, { recursive: true })
const assets = JSON.parse(readFileSync(listFile, 'utf8')).filter(a => !only || only.includes(a.name))
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}
const save = () => writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
const sleep = ms => new Promise(r => setTimeout(r, ms))

async function call(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  let json; try { json = JSON.parse(text) } catch { json = { raw: text } }
  return { status: res.status, json, retryAfter: Number(res.headers.get('retry-after')) || 5 }
}

// A create that fails with 4xx made no task. Anything else is ambiguous, so we stop
// rather than risk paying twice (the API has no idempotency key).
async function create(body) {
  const r = await call('POST', API, body)
  if (r.status >= 200 && r.status < 300 && r.json.result) return r.json.result
  const err = new Error(`create ${r.status}: ${JSON.stringify(r.json).slice(0, 300)}`)
  err.safe = r.status >= 400 && r.status < 500
  throw err
}

async function wait(id) {
  const deadline = Date.now() + 45 * 60_000
  while (Date.now() < deadline) {
    const r = await call('GET', `${API}/${id}`).catch(() => null)
    if (r && r.status === 200) {
      if (['SUCCEEDED', 'FAILED', 'CANCELED'].includes(r.json.status)) return r.json
      await sleep(Math.max(5, r.retryAfter) * 1000)
    } else await sleep(10_000)
  }
  throw new Error(`timed out waiting for ${id}`)
}

async function fetchTo(url, file) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`download ${res.status}`)
  writeFileSync(file, Buffer.from(await res.arrayBuffer()))
}

async function run(a) {
  const m = manifest[a.name] ??= { category: a.name.split('_')[0], prompt: a.prompt, polycount: a.polycount }
  if (m.status === 'done') return
  const log = s => console.log(`[${a.name}] ${s}`)
  try {
    if (!m.previewId) {
      m.previewId = await create({
        mode: 'preview', prompt: `${a.prompt} ${STYLE}`, model_type: 'smart-topology', ai_model: 'meshy-t2.5',
        target_polycount: a.polycount, target_formats: ['glb'], ...(a.pose ? { pose_mode: a.pose } : {}),
      })
      m.status = 'preview'; save(); log(`preview ${m.previewId}`)
    }
    if (!m.refineId) {
      const p = await wait(m.previewId)
      if (p.status !== 'SUCCEEDED') { m.status = 'preview-failed'; m.error = p.task_error?.message; save(); return log(`preview ${p.status}`) }
      m.refineId = await create({ mode: 'refine', preview_task_id: m.previewId, enable_pbr: true, target_formats: ['glb'] })
      m.status = 'refine'; save(); log(`refine ${m.refineId}`)
    }
    const t = await wait(m.refineId)
    if (t.status !== 'SUCCEEDED') { m.status = 'refine-failed'; m.error = t.task_error?.message; save(); return log(`refine ${t.status}`) }
    await fetchTo(t.model_urls.glb, join(OUT, `${a.name}.glb`))
    if (t.thumbnail_url) await fetchTo(t.thumbnail_url, join(THUMBS, `${a.name}.png`))
    m.file = `${a.name}.glb`; m.status = 'done'; delete m.error; save(); log('done')
  } catch (e) {
    m.error = e.message; if (!e.safe) m.status = `${m.status ?? 'new'}-stalled`
    save(); log(`ERROR ${e.message}`)
  }
}

const queue = [...assets]
await Promise.all(Array.from({ length: concurrency }, async () => { while (queue.length) await run(queue.shift()) }))
const done = Object.values(manifest).filter(m => m.status === 'done').length
console.log(`\n${done}/${Object.keys(manifest).length} assets done`)
