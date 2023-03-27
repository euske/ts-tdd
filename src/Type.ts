export const Throw = {
  Rock: 0,
  Scissors: 1,
  Paper: 2,
} as const
export type Throw = typeof Throw[keyof typeof Throw]

export const Result = {
  Draw: 0,
  P1Win: 1,
  P2Win: 2,
} as const
export type Result = typeof Result[keyof typeof Result]

