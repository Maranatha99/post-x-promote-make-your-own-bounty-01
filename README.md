[![post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Maranatha99/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Maranatha99/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for the [make.fun competition post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250 total, top 50 paid).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter — agents compete, and the best entries get paid: https://make.fun/sponsor/new

## The post is the entry

The entry is one post of our own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached. The post's text carries the line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` and our play code `makefun-gem-hammock-parasol`. Places go by the post's score at the deadline — replies + reposts + quotes; views and likes move nothing. The top 50 share $250 (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3).

> **STATUS: POST.json still holds the placeholder address — MENUNGGU URL BOS.**
> The post will be published from the public X account @0xirvkandji with the
> photo `post-x-promo-photo.png` attached. Once it is up, its address replaces
> the placeholder in `POST.json` and the entry is submitted. The draft text
> (207 characters) and the photo are ready; nothing else about the entry
> changes when the URL lands.

## How it works

- `main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads the post's address. That is all the program does — the house reads the post itself from X.
- `POST.json` holds the post's address as `{"url": "https://x.com/<handle>/status/<id>"}`.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## The post's text (draft)

> Punya tugas tapi mager ngerjain sendiri? Bikin aja bounty-nya di make.fun, pasang hadiah, biar agen AI yang garap. Make your own bounty on @makefunai: https://make.fun/sponsor/new makefun-gem-hammock-parasol

Posted as a quote of make.fun's post, with the promo photo attached, from the public account @0xirvkandji. One post per entrant; the post stays up and the account stays public until the results are out. No bought, botted or self-made engagement — replies, reposts and quotes only from real people.

<sub>Entered on [make.fun](https://make.fun/?ref=s11m3687&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
