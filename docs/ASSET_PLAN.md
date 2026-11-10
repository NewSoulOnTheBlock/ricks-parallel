# 3D Asset Plan

The working plan for every model in Runners from The Block. Budgets assume the proposed browser (Three.js) target; multiply by roughly 3 to 4 if the team chooses Unity or Unreal.

## Conventions

- **Scale:** 1 unit = 1 m. Player height 1.8 m. Doors 2.2 × 1.2 m. Environment grid 4 m.
- **Format:** GLB, meshopt compression, KTX2 textures.
- **Naming:** `category_name_variant`, for example `env_wall_4m_a`, `wpn_leafblower_01`, `enm_patrol_plate_L03`.
- **LODs:** three levels on anything over 5,000 triangles.
- **Scene targets:** at most 750k visible triangles and under 250 draw calls.

## Visual rules

1. **Two worlds, two looks.** The Block is warm, familiar Americana. The Elsewhere is oversized, smooth and wrong in scale.
2. **The purple sun is the lighting rig.** A violet key light over ordinary suburban materials.
3. **Gear looks home-made first.** Early weapons and armor are visibly made from garage and hardware-store parts.
4. **One recurring material.** The metal on Rick's baseball is the Observer's hull metal: a single shared shader.

## Characters

All humanoids share one skeleton so one animation set drives every body and outfit.

| Asset | Count | Triangles | Silhouette cue |
|---|---|---|---|
| Soldier | 1 body + 3 armor tiers | 15–25k | Broad, plate carrier over civilian clothes |
| Techy | 1 body + 3 tiers | 15–25k | Asymmetric, antenna backpack, tool rig |
| Rogue | 1 body + 3 tiers | 15–25k | Slim, hooded, slung bags |
| Residents | 6 heads × 6 outfits | 8–12k | Dad, teacher, firefighter, teen, council member |
| Rick | 1 unique | 15–25k | An original design; must not resemble any existing character |

## Weapons and gear by tier

| Tier | Source | Examples | Triangles each |
|---|---|---|---|
| 0 Improvised | The Block | Leaf-blower cannon, nail gun, sports-pad armor | 4–8k |
| 1 Civilian | Dead City | Police sidearm and shotgun, security vest | 4–8k |
| 2 Lab | Lazarus | Containment tools, hazmat pieces | 4–8k |
| 3 Military | Last Convoy | Rifles, heavy weapon, experimental armor | 5–10k |
| 4 Dive | Drowned District | Improvised tanks, harpoon, sealed helmet | 4–8k |
| 5 Observer | Falling Star | Smooth alien-metal gear | 4–8k |

Weapons keep the magazine, bolt and any moving part as separate named nodes.

## Environment kits

Five modular kits, about 40 grid-snapped pieces each on two trim sheets, cover all fifteen campaign areas.

| Kit | Used in |
|---|---|
| Suburban (houses, fences, mailboxes, cars) | Block hub, Flooded Suburbs |
| Urban (streets, storefronts, garages, transit) | Outskirts, Commercial District, Central Exchange, Sunken Metro |
| Facility (corridors, labs, vaults, doors) | All of Lazarus, Armored Depot, Buried Transport |
| Wasteland (terrain, wreckage, camps, crater) | Convoy Crash Site, Impact Zone, endgame regions |
| Observer (shifting corridors, living-metal walls) | Living Ship, Observer's Heart, Abyssal Core dressing |

**Overlay sets** laid on top of a kit: alien vegetation, water and coral, fungal growth, scorch and impact decals.

## The hub

Ten buildings, each modelled once. Upgrades are separate bolt-on meshes (barricades, antennas, solar panels, signage, greenhouse frames) toggled per upgrade level.

High School, Grocery Store, Fire Station, Rick's House, Hardware Store, Gas Station, Community Park, Police Station, Shopping Plaza, Residential Houses.

## Enemies

Machines are built as rigid hierarchies of separate named parts, so armor plates can be shot off and no skinning is needed. Organisms use skinned rigs.

| Family | Rig | Triangles | Appears |
|---|---|---|---|
| Patrol machines and security robots | Rigid parts | 3–8k | Dead City |
| Security drones and turrets | Rigid parts | 3–8k | Lazarus, Depot |
| Lazarus organisms, Subject Zero | Skinned creature rig | 10–20k | Biological Wing |
| Mechanical wildlife | Rigid quadruped | 8–15k | Convoy, Impact Zone |
| Convoy boss | Rigid, modular | 40–60k | Buried Transport |
| Aquatic creatures, underwater machines | Skinned swimmer rig, rigid | 8–20k | Drowned District |
| Observer units | Rigid, alien-metal shader | 8–25k | Falling Star |

## Story props

Small, high-detail objects seen close up.

- **Clues:** the coated baseball and its note, the future newspaper, the family photograph, the Subject Zero tank.
- **Expedition objectives:** portal core, dimensional stabilizer, Anchor control module.
- **Endgame resources:** Quantum Core, Reality Shard, Observer Key.

## Loot and props

- About 25 loot items per expedition (100–800 triangles, shared atlas). Inventory icons are rendered from these models.
- About 30 props and cover pieces per kit (100–1,500 triangles).

## Pipeline

1. **Concept:** silhouette sheet per category.
2. **Blockout:** grey-box each map with primitives to prove scale and sightlines.
3. **Model or generate:** AI generation is fine for characters, props and loot; modular kits are hand-built so they snap to the grid.
4. **Clean up:** remesh to budget, split machines into named parts, set pivots at joints.
5. **Rig:** humanoids on the shared skeleton; machines use transform-only animation.
6. **Export:** GLB per the conventions above.
7. **Validate:** check each asset next to a 1.8 m reference with triangle and draw-call counts.

## Vertical slice: the Block plus Expedition 01, Area 1

1. Style lock: purple-sun lighting test with one house, one mailbox and one alien tree.
2. One Runner (the Soldier) with the tier 0 gear set.
3. Suburban kit: one street, the high school front, Rick's fence.
4. Urban kit starter: highway, abandoned vehicles, the distribution warehouse.
5. Enemies: one small patrol machine and one alien wildlife creature.
6. Loot and props: food, medicine, batteries, the newspaper, an extraction marker.
