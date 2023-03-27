import {Result, Throw} from "./Type";
import {play} from "./RSP";

describe('RSP Tests', () => {
  test('Rock(グー) vs Paper（パー）=> Paperの価値', () => {
    const p1 = Throw.Rock
    const p2 = Throw.Paper

    const result = play(p1, p2)

    expect(result).toBe(Result.P1Win)
  })
});
