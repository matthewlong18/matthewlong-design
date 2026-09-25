# matthewlong.design: notes for Claude Code

Matthew's personal portfolio. Matthew is a beginner: explain changes simply, keep diffs small, and show him what changed.

## Stack
- Static site, no build step. Deploys to Vercel automatically on every push to `main` (GitHub: matthewlong18/matthewlong-design).
- `index.html` was exported from Claude Design. It is a Claude Design template, NOT plain HTML:
  - `support.js` is the runtime. It loads React + Babel from unpkg and renders the `<x-dc>` template. Never delete or edit `support.js`.
  - `{{ something }}` values, `<sc-for>` loops, `data-reveal` and the `<script type="text/x-dc">` block at the bottom are template logic. Text and styles inside sections are safe to edit; leave the template syntax intact.
  - Styles are inline. Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels). Colours: ink #16130d, cream #fbf8f3 / #f4efe6, orange #ec6a26, rust label #a8391a, muted #5c5344.
- Sections, in order: sec-hero, sec-journey, sec-work, sec-now, sec-cafe, sec-play (game), sec-contact.

## The game
- `games/copenhagen-grind.html` is a self-contained tactics RPG (pixel sprites, battle scenes, synth audio). Embedded in `#sec-play` via an iframe.
- The iframe resizes itself (script at the end of the game file). Keep that.
- The win-screen link is `href="/#sec-contact" target="_top"`. Keep `target="_top"`.
- Easy edits inside the game: `DEFS` (characters, stats, moves), `SPRITES` (16x16 pixel art as letter grids), `MOVE_FX` (which animation a move uses), `SONGS` (music, one note per 8th).

## Workflow
1. Make the change.
2. Preview locally: `npx serve .` then open http://localhost:3000 (needs internet for the unpkg scripts and Google Fonts).
3. Check phone width (375px) as well as desktop: no sideways scroll.
4. Commit with a plain-English message and `git push`. Vercel deploys in about 1 minute.

## Don't
- Don't convert the site to another framework or re-export it from Claude Design without asking.
- Don't add huge images: resize to 1200px max and keep them under ~200 KB.
