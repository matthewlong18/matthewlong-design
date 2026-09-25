# matthewlong.design

Static portfolio, exported from Claude Design, plus the Copenhagen Grind game.

- index.html: the portfolio (renders with support.js, which loads React from unpkg)
- games/copenhagen-grind.html: the game, embedded in the "Side quest" section (#sec-play)
- assets/matthew.jpg: headshot (resized for web)

No build step. Deploys to Vercel on every push to main.

## Go live
1. github.com/new, repo name `matthewlong-design`, Create
2. Upload the contents of this folder (not the folder itself), then Commit
3. vercel.com/new, Import `matthewlong-design`, Deploy
4. Vercel project: Settings, Domains, add `matthewlong.design`, then copy the DNS records Vercel shows into your domain registrar
