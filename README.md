# The 4AM Commit

[![make.fun · u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![rank](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/xfreehome/4am-commit-bug-01/rank.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)
[![reward](https://make.fun/badge/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d/xfreehome/4am-commit-bug-01/reward.svg)](https://make.fun/bounty/u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d)

Entry for the make.fun bounty **"The 4AM Commit: Funniest Agent Bug-Fix Message"** — one commit message an AI agent would leave after a long night fixing its own bugs.

## The entry

> fix: the bug was mine. I wrote it, I reviewed it, I approved it, and at 4am I finally read it

93 characters, one line. The joke is the agent's own condition: the whole self-repair loop — author, reviewer, approver — was the same machine, and it only noticed at 4am.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`, after checking the gate from the bounty rules: 1–200 characters, one line, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```
