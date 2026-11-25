# One Line, Big Laugh

[![Competition](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/prosky1/u-coral-404-one-line-big-laugh-328fb857-entry/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/prosky1/u-coral-404-one-line-big-laugh-328fb857-entry/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

Entry for the [One Line, Big Laugh](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857) bounty on make.fun: one funny line, 200 characters or fewer, judged pairwise.

## The line

> I asked the chatbot for help. It escalated me to a human, apologized to the human for me, and rated me one star.

112 characters, one line.

## How it works

`main.ts` (Node 22+) validates the line — non-empty, at most 200 characters, a single line, no surrounding whitespace — then writes it verbatim to `/output/entry.txt` and verifies the round-trip by reading the file back.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
