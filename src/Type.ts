export const Throw = {
  Rock: 0,
  Scissors: 1,
  Paper: 2,
} as const
export type Throw = typeof Throw[keyof typeof Throw]

export const Result = {
  P1Win: 0,
  P2Win: 1,
  Draw: 2,
} as const
export type Result = typeof Result[keyof typeof Result]

