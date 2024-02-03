const array = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start)

export default array