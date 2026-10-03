# matthewlong.design

Matthew's portfolio. A static site: no build step, deployed to Vercel on every push to `main`.

- `index.html`: the portfolio (exported from Claude Design; renders with `support.js`, which loads React from unpkg)
- `games/super-startup-adventure-time.html`: the tactics game, embedded in the "Side quest" section (`#sec-play`)
- `assets/`: the headshot (also the link-preview image) and the favicon

## Editing
Preview with `npx serve .` and open http://localhost:3000, check desktop and a 375px phone width, then commit and push. Vercel redeploys in about a minute. See `CLAUDE.md` for the template rules.
