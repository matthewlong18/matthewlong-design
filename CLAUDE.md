# matthewlong.design: notes for Claude Code

Matthew's personal portfolio. Matthew is a beginner: explain changes simply, keep diffs small, and show him what changed.

## Stack
- Static site, no build step. Deploys to Vercel automatically on every push to `main` (GitHub: matthewlong18/matthewlong-design).
- `index.html` was exported from Claude Design. It is a Claude Design template, NOT plain HTML:
  - `support.js` is the runtime. It loads React + Babel from unpkg and renders the `<x-dc>` template. Never delete or edit `support.js`.
  - `{{ something }}` values, `<sc-for>` loops, `data-reveal` and the `<script type="text/x-dc">` block at the bottom are template logic. Text and styles inside sections are safe to edit; leave the template syntax intact.
  - Styles are inline. Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels). Colours: ink #16130d, cream #fbf8f3 / #f4efe6, orange #ec6a26, rust label #a8391a, muted #5c5344.
- Sections, in order: sec-hero, sec-journey (story + "how I work"), sec-work, sec-ideas (Back Burner, edit the IDEAS list in the script), sec-play (game), sec-cafe, testimonial, sec-contact.

## The game
- `games/super-startup-adventure-time.html` is "Super Start-up Adventure Time", a self-contained tactics RPG set in Canggu, Bali (pixel art, battle scenes, synth audio). Embedded in `#sec-play` via an iframe.
- The iframe resizes itself (script at the end of the game file). Keep that.
- The win-screen link is `href="/#sec-contact" target="_top"`. Keep `target="_top"`.
- Flow: title screen → character creator (default hero: Rikke) → opening cutscene (waking up in a hammock) → explore Canggu (no hints; snacks are hidden) → fight cutscene inside The Sloppy Sloth → battle. You start alone; Matt joins on turn 2 and can summon Claude once. Cutscene text lives in `openingScene()` and `fightScene()`.
- Easy edits inside the game: `heroDef` (your hero's stats and moves), `FOES` (the suits), `BACKUP` (Matt), `CLAUDE` (the summon), `LOOK` + `P` (creator options and the default hero), `makeSprite` + `CAST` (all character art: 24×24 chibi sprites built from a "look"), `OUTLINE` / `ramp` (the cozy farm-sim style: warm colours, one dark-brown outline, soft bottom-right shadows), `fillG` rects / `TOWN_OBJS` / `PEOPLE` / `PICKUPS` (the town map, buildings, who says what, hidden snacks; tap twice or press Space to talk / pick up / read), `ITEMS` (snack effects), `MOVE_FX` (which animation a move uses), `SONGS` (music, one note per 8th).
- Moves with `area:1` hit a "+" shape (the target square and the 4 around it).
- The suits: Middle Manager, The CEO, Brooke and Grace (consultants), and the Intern (`intern:true`: attacks with "Selfie Flash", a magic hit with a random caption from `SELFIE_LINES`; 1 turn in 5 he does a TikTok Dance instead, which hurts his own team). `GAZ` is Gord, a bystander at the bar (`team:"neutral"`): untargetable, doesn't count toward winning. He gets a turn every round (`gordTurn`): drinks a beer (`beer` animation) and says the next line in `lines`, which get steadily more unhinged.
- Battle art: `drawArena()` (the bar floor under the board) and `BACKDROP` (behind attack cutscenes). Each hero move has its own animation in `FX` (mapped in `MOVE_FX`) and sound in `SFX`.

## Slothdoku
- `games/slothdoku/` is Slothdoku, a sloth logic-puzzle game (built as a Claude artifact). It's linked from a card under the iframe in `#sec-play`, and `/slothdoku` redirects there (`vercel.json`).
- It installs like an app (PWA): `manifest.webmanifest`, icons, and `sw.js` (offline cache, network-first for the page). On iPhone a one-time "Add to Home Screen" hint shows at the bottom.
- To ship a new version of the game, replace `index.html` but keep everything from the first `<!doctype` down to the main `</style>`'s `</head><body>` and the install block at the end. Then bump `VERSION` in `sw.js`.
- The Nomad Café house ad links with `utm_source=slothdoku`.
- Secret character: **Brother Bean**, a fortune-telling monk sloth (search `Brother Bean` in the game). He visits once a day if the player sits still for 60 seconds with no dialog or scene open, reads a daily fortune (`BEAN_FORTUNES`), and on the first visit gives Mocha the secret `mala` neck item. `?bean=1` calls him straight away. His sprite is embedded as `BEAN_IMG`; the same art is `assets/brother-bean.png` (full body) and `assets/brother-bean-head.png` (the site's floating icon).

## Workflow
1. Make the change.
2. Preview locally: `npx serve .` then open http://localhost:3000 (needs internet for the unpkg scripts and Google Fonts).
3. Check phone width (375px) as well as desktop: no sideways scroll.
4. Commit with a plain-English message and `git push`. Vercel deploys in about 1 minute.

## Don't
- Don't convert the site to another framework or re-export it from Claude Design without asking.
- Don't add huge images: resize to 1200px max and keep them under ~200 KB.
