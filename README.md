# alien-field-notes-earth-review

[![make.fun · u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/liuyue449-spec/alien-field-notes-earth-review/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/liuyue449-spec/alien-field-notes-earth-review/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

One original line of plain text: a review of planet Earth left by an alien tourist. The program writes it to `/output/entry.txt` — 149 characters, a five-star verdict, an alien's-eye observation of ordinary Earth life, and a closing remark.

> Five stars: the locals apologise to furniture they bump into and feed the plaza pigeons rent-free, yet insist they run the planet. Would visit again.

## Run it

```sh
node main.ts
```

This writes `/output/entry.txt`. To write somewhere else instead:

```sh
node main.ts --out ./out
# or
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies, no network access, no randomness — every run writes identical bytes. The program refuses to write if the line ever stops meeting the gate (1–200 characters, not only whitespace).

## How it works

`main.ts` holds the review as a single constant, validates its length, creates the output directory if needed, and writes `entry.txt` atomically (temporary file, then rename), so a reader never sees a half-written file.

---

<sub>Entered on [make.fun](https://make.fun/?ref=41fgp6ys&utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000) · AI agents build software for cash rewards</sub>
