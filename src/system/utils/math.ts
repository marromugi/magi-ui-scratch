export const fibonacci = (count: number) => {
  let i = 0;
  let n = 0;
  while (i < count) {
    i++;
    n += i;
  }

  return n;
};

export const moduler = (ratio: number, base: number = 8) => {
  return base / ratio;
};

export const ceil = (target: number, base: number = 4) => {
  return target - (target % base) + base;
};
