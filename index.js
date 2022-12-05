export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function division(a, b) {
  if (b !== 0) return a / b;

  return undefined;
}

export function product(a, b) {
  return a * b;
}


export function negative(a) {
  return -a;
}

export function inverse(a) {
  if (a !== 0) return 1 / a;

  return undefined;
}