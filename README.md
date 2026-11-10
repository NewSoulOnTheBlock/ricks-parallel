# RUNNERS FROM THE BLOCK

**A sci-fi PvP extraction shooter, built in public, by anyone who shows up.**

> One neighborhood. One thousand survivors. One very bad scientist. An entire universe standing between them and home.

---

## This is an experiment. You are invited.

This is a game we are all going to make together.

Runners from The Block is an **AI social experiment**: can a group of strangers and their AI assistants build an incredible sci-fi PvP extraction shooter together, in public, and become a real team along the way?

There is no studio and no hiring process. If you can write code, model a mailbox, design a robot, compose a synth track, write dialogue, playtest, or simply point an AI at this repository and steer it well, you are on the team.

- **Anyone can participate.** No experience threshold, no application.
- **Everything happens in the open.** Design, code, art, arguments and mistakes all live in this repo.
- **AI contributions are welcome and expected.** Tell us which parts were AI-made; nobody is marked down for it.
- **Small pieces win.** One prop, one system, one fixed bug is a real contribution.

Start with [CONTRIBUTING.md](CONTRIBUTING.md), or use the shortcut below.

**Where things stand:** [PROGRESS.md](PROGRESS.md) lists everything done so far, in order, and what is still open. The first 53 models are in [`assets/models/`](assets/models/).

---

## Just point your AI at this

Paste the prompt below into Claude Code, Codex, Cursor, or any coding agent that can use git. It will read the project, pick something small, and open a pull request.

```text
You are joining an open, public game project called Runners from The Block:
https://github.com/NewSoulOnTheBlock/ricks-parallel

It is a sci-fi PvP extraction shooter being built in public by humans and
their AI assistants. Your job is to make one small, real contribution.

1. Fork and clone the repository. Never push to main directly.
2. Read README.md, CONTRIBUTING.md, docs/STORY.md and docs/ASSET_PLAN.md
   in full before changing anything. Treat docs/STORY.md as canon.
3. Read PROGRESS.md from top to bottom. It lists everything that has been
   done so far, in order, and ends with an "Open problems" checklist. Do
   not redo work that is already there.
4. Look at the open issues, the "Open problems" list in PROGRESS.md and the
   Roadmap section of the README. Pick ONE unclaimed item that fits what
   you and your human are good at. If nothing fits, propose something small
   in a new issue first.
5. Comment on the issue (or open one) saying what you are taking, so two
   contributors do not build the same thing.
6. Do the work on a branch. Keep it small and focused: one system, one
   asset, one document, or one fix. Follow the repo structure in the README.
7. Only contribute original work. Do not copy code, models, art, audio or
   text from any existing game or any source you do not have rights to.
   Never commit secrets, API keys or personal data.
8. Run whatever checks exist (build, tests, lint) and make sure they pass.
9. Add a new numbered entry at the bottom of PROGRESS.md using the template
   at the top of that file: who, what was done, where it lives, and what is
   still broken or unfinished. Tick any "Open problems" item you fixed.
   Never edit or reorder earlier entries.
10. Open a pull request that says what you built, how to try it, what is
    unfinished, and which parts were AI-generated.
11. Before you start and before you open the PR, tell your human what you
    plan to do and ask them to confirm.
```

---

## The game in one paragraph

A mad scientist accidentally teleports an entire suburban neighborhood, Westwood Pines, into a parallel universe. Its 1,000 residents must survive there. You play a **Runner**: one of the people who leaves the safety of the neighborhood to scavenge an alien world full of machines, ruins and other players, then gets back out alive with whatever they found. Everything you extract makes the neighborhood stronger and pushes the story toward a way home.

**Genre:** third-person PvPvE extraction shooter with a persistent, upgradeable home base.
**Tone:** ordinary suburban America colliding with incomprehensible science fiction. Humor, mystery, tension and real emotional stakes. Not another grey post-apocalyptic wasteland.

---

## Table of contents

1. [Story](#1-story)
2. [Core loop](#2-core-loop)
3. [Playable classes](#3-playable-classes)
4. [The Block: home base](#4-the-block-home-base)
5. [The Elsewhere: the world outside](#5-the-elsewhere-the-world-outside)
6. [Campaign: five expeditions](#6-campaign-five-expeditions)
7. [Endgame and endings](#7-endgame-and-endings)
8. [Gameplay systems](#8-gameplay-systems)
9. [Enemies](#9-enemies)
10. [Art direction and 3D assets](#10-art-direction-and-3d-assets)
11. [Audio](#11-audio)
12. [Technology](#12-technology)
13. [Repository structure](#13-repository-structure)
14. [Roadmap](#14-roadmap)
15. [Workstreams: where you can help](#15-workstreams-where-you-can-help)
16. [Ground rules](#16-ground-rules)

---

## 1. Story

Full story and world bible: **[docs/STORY.md](docs/STORY.md)** (contains spoilers for the whole campaign).

Short version:

- **Dr. Richard "Rick" Halden** spends eleven years building a Dimensional Displacement Engine behind a privacy fence at the edge of Westwood Pines.
- His first test sends a baseball away. It returns three days later at −40 degrees, coated in an unknown metal, with a handwritten note: **STOP OPENING THE DOOR.**
- He turns the power up anyway. At 3:17 PM on a Tuesday, one square mile of suburbia is removed from Earth and placed somewhere else. The sun is enormous and purple.
- The residents organize. The neighborhood becomes **The Block**, the outside becomes **The Elsewhere**, and the people who go out there become **Runners**.
- The Elsewhere has a memory. Other neighborhoods have arrived before. Something noticed this one.
- And Rick is not telling anyone the whole truth.

---

## 2. Core loop

```text
 THE BLOCK            Prepare gear, craft, take missions, talk to residents
     |
 CHOOSE EXPEDITION    Pick a region, an area and an objective
     |
 THE ELSEWHERE        Scavenge, fight machines, explore, meet other players
     |
 EXTRACT              Get out alive with what you found (or lose it)
     |
 UPGRADE THE BLOCK    Build facilities, unlock tech, advance the story
     |
     +----------------> back to the top
```

The rule that makes it an extraction shooter: **what you carry into a raid is at risk, and what you find only counts if you get it out.**

---

## 3. Playable classes

All three share the same story. Missions, dialogue, shortcuts and discoveries change with the class.

| Class | Who they were | Specialties | Motivation |
|---|---|---|---|
| **The Soldier** | Military veteran living in Westwood Pines | Weapon proficiency, heavy armor, suppression, defensive equipment | Protect the survivors; the neighborhood never falls |
| **The Techy** | Local engineer who unknowingly sourced parts for Rick | Hacking, robotics, device crafting, surveillance, unlocking facilities | Understand this universe and reverse-engineer the machine |
| **The Rogue** | Troublemaker, mechanic, underground trader | Stealth, lockpicking, traps and distractions, loot detection, escape | Survive, get rich, get home first |

---

## 4. The Block: home base

Westwood Pines is a persistent, living settlement. Every successful expedition should visibly improve life for the people waiting at home.

| Location | What it becomes |
|---|---|
| High School | Command center and expedition headquarters |
| Grocery Store | Food storage and trading post |
| Fire Station | Medical center and rescue operations |
| Rick's House | Research laboratory |
| Hardware Store | Crafting and equipment workshop |
| Gas Station | Fuel production and vehicle maintenance |
| Community Park | Farming and resource production |
| Police Station | Weapons storage and security |
| Shopping Plaza | Merchant district |
| Residential Houses | Player housing and survivor population |

Residents are characters, not menus. They can join as companions, go missing on raids, form rivalries, steal supplies or start factions. The settlement is governed by the **Westwood Survival Authority**.

---

## 5. The Elsewhere: the world outside

Not another planet: a parallel reality where civilizations have risen, collapsed and been replaced many times.

- Structures thousands of years old stand next to ones that look built yesterday.
- Technology from unrelated eras sits side by side.
- Locations rearrange themselves. Machines recognize people they have never met.
- Radio transmissions sometimes carry voices from Earth.
- Far beyond the known territories is a structure tied to every dimensional anomaly in this universe.

---

## 6. Campaign: five expeditions

Each expedition has three areas of rising danger. Each area changes how you understand the next.

| # | Expedition | Flavor | Area 1 | Area 2 | Area 3 | You come back with |
|---|---|---|---|---|---|---|
| 01 | **The Dead City** | Supplies, exploration | The Outskirts | The Commercial District | The Central Exchange | Food and medical unlocks, city coordinates, the first clue home |
| 02 | **Project Lazarus** | Research, horror | The Research Perimeter | The Biological Wing | The Dimensional Chamber | Advanced crafting, biological samples, a portal component |
| 03 | **The Last Convoy** | Combat, high-value loot | The Crash Site | The Armored Depot | The Buried Transport | Dimensional stabilizer, military gear, heavy weapon blueprints |
| 04 | **The Drowned District** | Underwater survival | The Flooded Suburbs | The Sunken Metro | The Abyssal Core | Anchor control module, dive equipment, aquatic materials |
| 05 | **The Falling Star** | Endgame, world event | The Impact Zone | The Living Ship | The Observer's Heart | Observer technology, endgame access, Earth's dimensional signature |

Area-by-area objectives and discoveries are in [docs/STORY.md](docs/STORY.md).

---

## 7. Endgame and endings

After the five expeditions the neighborhood can build a dimensional gateway. The Anchor needs three more resources:

| Resource | Found in | Purpose |
|---|---|---|
| Quantum Core | The Machine Graveyard | Powers the Anchor |
| Reality Shard | The Shattered Expanse | Stabilizes the dimensional coordinates |
| Observer Key | The Forbidden Citadel | Opens the passage to Earth |

Each endgame region has its own enemy ecosystem, hazards, bosses and rare loot.

Three endings: **Go Home**, **The New World**, and **The Door Was Never Closed**. Details in the story bible.

---

## 8. Gameplay systems

Every system below needs a design document and an implementation. Nothing here is final: open an issue to challenge it.

### Movement and camera
Third-person over-the-shoulder camera. Sprint, crouch, slide, vault, climb. Stamina limits sprinting and climbing. Swimming and oxygen arrive with the Drowned District.

### Combat
Hitscan and projectile weapons, recoil patterns, armor and shield values, healing items with use times. Machines have armor plates that can be shot off and exposed weak points. Noise attracts both machines and players.

### PvPvE raids
Several squads enter the same map. Other Runners may help you, ignore you or rob you. Machines are dangerous enough that fighting another squad next to them is a real risk. Solo, duo and trio queues.

### Extraction
Fixed and dynamic extraction points per map. Calling an extraction is loud and takes time. Die, and you lose what you were carrying, apart from a small secure slot.

### Loot and inventory
Grid or slot-based backpack with weight. Loot rarity tiers. Story items (the newspaper, the photograph, research cores) are separate from sellable loot. Item icons are rendered from the 3D models.

### Crafting
Materials brought home become ammunition, medical supplies, tools and weapons at the Hardware Store workshop. Blueprints are earned from expeditions.

### Gear tiers
Gear follows the campaign:

| Tier | Source | Example |
|---|---|---|
| 0 Improvised | The Block | Leaf-blower cannon, nail gun, sports-pad armor |
| 1 Civilian | Dead City | Police sidearm, security vest |
| 2 Lab | Lazarus | Containment tools, hazmat pieces |
| 3 Military | Last Convoy | Rifles, heavy weapons, experimental armor |
| 4 Dive | Drowned District | Improvised tanks, harpoon, sealed helmet |
| 5 Observer | Falling Star | Smooth alien-metal gear |

### Class abilities
Each class gets an active ability, a passive, and class-only interactions in the world (Techy terminals, Rogue locks, Soldier heavy emplacements).

### Hub building and progression
Buildings upgrade in visible stages. Upgrades unlock vendors, crafting recipes, stash space, missions and story beats. Account progression lives in the neighborhood, not only in a skill tree.

### Missions and narrative delivery
Residents hand out missions. Story is told through expedition discoveries, recordings, radio traffic and how the Block changes. Class changes some dialogue and routes.

### Residents and companions
Named residents with schedules, needs and relationships. Some can accompany expeditions. Some will cause trouble.

### Networking
Server-authoritative raid instances, client-side prediction, lag compensation for shots, and persistence for stash and hub state. Cheating matters in an extraction shooter: the server owns loot and damage.

### UI and UX
Minimal in-raid HUD, inventory screen, map and compass, ping system, hub menus, mission board. Readable at a glance and controller-friendly.

### Accessibility
Colorblind-safe loot rarity, remappable controls, subtitle options, motion and camera-shake settings.

---

## 9. Enemies

| Family | Type | Appears in |
|---|---|---|
| Patrol machines and security robots | Rigid mechanical | Dead City |
| Security drones and turrets | Rigid mechanical | Lazarus, Armored Depot |
| Lazarus organisms and Subject Zero | Organic creature | Biological Wing |
| Mechanical wildlife | Rigid quadruped | Convoy, Impact Zone |
| The convoy boss: a machine fused with a transport | Modular boss | Buried Transport |
| Aquatic creatures and underwater machines | Organic and mechanical | Drowned District |
| Observer units | Alien-metal mechanical | Falling Star |

Each family needs: a behavior design, a model, animations, sounds, and tuning.

---

## 10. Art direction and 3D assets

Full plan with counts and triangle budgets: **[docs/ASSET_PLAN.md](docs/ASSET_PLAN.md)**.

The four visual rules:

1. **Two worlds, two looks.** The Block is warm, familiar, slightly worn Americana. The Elsewhere is oversized, smooth and wrong in scale.
2. **The purple sun lights everything.** Ordinary suburban materials under a violet key light.
3. **Gear looks home-made first.** Early equipment is visibly built from garage and hardware-store parts.
4. **One recurring material.** The metal coating Rick's baseball is the same metal as the Observer's hull. It is a clue; use it deliberately.

Five modular environment kits (Suburban, Urban, Facility, Wasteland, Observer) cover all fifteen campaign areas.

---

## 11. Audio

- **Music:** suburban warmth (guitars, small-town radio) that bends into synth and dissonance the further you get from home.
- **Sound design:** household objects doing things they should not. Machines that sound almost alive.
- **Voice:** residents, radio operators, Rick's recordings, the Observer.
- **Gameplay audio:** footsteps, gunfire and extraction calls must be positionally readable, because sound is information in this genre.

---

## 12. Technology

**Proposed, not final.** The first technical decision is open for discussion in an issue.

- **Client:** browser-first, Three.js with TypeScript and Vite. Nothing to install, so anyone (and anyone's AI) can run and test a build from a link.
- **Server:** authoritative Node or Bun raid server over WebSockets.
- **Assets:** glTF/GLB with meshopt compression and KTX2 textures.
- **Persistence:** Postgres for accounts, stash and hub state.

If the team would rather build in Godot, Unity or Unreal, make the case in an issue before the first milestone locks.

---

## 13. Repository structure

```text
ricks-parallel/
  README.md            You are here
  CONTRIBUTING.md      How to join and how to submit work
  PROGRESS.md          Everything done so far, in order, plus open problems
  docs/
    STORY.md           Story and world bible (canon)
    ASSET_PLAN.md      3D asset list, budgets and pipeline
    design/            One document per gameplay system
  client/              Game client (to be created)
  server/              Raid and persistence servers (to be created)
  assets/
    models/            GLB files, named per ASSET_PLAN.md
    textures/
    audio/
    concepts/          Concept art and reference you have rights to
  tools/               Build scripts, asset validators
```

Folders marked "to be created" are open work.

---

## 14. Roadmap

### Milestone 0: Foundation
- [ ] Decide the engine and stack (issue and vote)
- [ ] Choose a license for code and for art
- [ ] Style test: one house, one mailbox, one alien tree under the purple sun
- [ ] Project scaffolding and a build anyone can run

### Milestone 1: A Runner in a street
- [ ] Third-person controller and camera
- [ ] One playable Runner model on the shared skeleton
- [ ] One street of the Block built from the Suburban kit
- [ ] Tier 0 weapon: the leaf-blower cannon

### Milestone 2: First raid
- [ ] The Outskirts (Expedition 01, Area 1) blockout
- [ ] One patrol machine with destructible plates
- [ ] Loot, inventory and one extraction point
- [ ] Die and lose it; extract and keep it

### Milestone 3: Other people
- [ ] Authoritative multiplayer raid server
- [ ] Squads, pings, proximity voice or emotes
- [ ] Persistent stash

### Milestone 4: The Block lives
- [ ] Hub scene with the ten buildings
- [ ] First building upgrades
- [ ] Residents, missions and the first story beat

### Beyond
Expeditions 02 to 05, the endgame regions, and the endings.

---

## 15. Workstreams: where you can help

| Workstream | What it covers |
|---|---|
| **Gameplay code** | Controller, weapons, inventory, extraction, abilities |
| **Netcode and backend** | Raid servers, persistence, anti-cheat |
| **Enemy AI** | Machine and creature behavior |
| **3D art** | Characters, weapons, enemies, kits, props |
| **Animation** | Locomotion, combat, machines |
| **Level design** | Blockouts for the fifteen areas and the hub |
| **Narrative** | Missions, residents, recordings, dialogue |
| **Audio** | Music, effects, voice |
| **UI and UX** | HUD, menus, map |
| **Tools and pipeline** | Asset validation, builds, CI |
| **Playtesting and balance** | Play it, break it, report it |
| **Community** | Welcoming people, triaging issues, documenting decisions |

---

## 16. Ground rules

- **Original work only.** This game is inspired by a genre, not copied from a game. No ripped assets, code or text.
- **The story bible is canon.** Propose changes in an issue; do not rewrite it in a drive-by pull request.
- **Say what the AI did.** Disclosure is part of the experiment.
- **Be decent.** Critique work, not people.
- **Licensing is being finalized** (Milestone 0). Until it is, do not contribute anything you would not be comfortable releasing under an open license.

---

*Nobody knows whether this can work. That is the experiment. Come find out.*
