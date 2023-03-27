import {Result, Throw} from "./Type";
import {play} from "./RSP";

describe('RSP Tests', () => {
  test('Player1：Rock(グー) vs Player2：Scissors（チョキ）=> Player1の勝ち', () => {
    const p1 = Throw.Rock
    const p2 = Throw.Scissors

    const result = play(p1, p2)

    expect(result).toBe(Result.P1Win)
  })
});
