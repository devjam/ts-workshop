export const sum = (x: number, y: number) => {
  if (!Number.isInteger(x)) {
    throw new TypeError("");
  }
  if (!Number.isInteger(y)) {
    throw new TypeError("");
  }
  return x + y;
};
