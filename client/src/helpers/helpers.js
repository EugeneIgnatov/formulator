const numberToFix = (num) => Number(parseFloat(num).toFixed(2));

export const V = (s, a, b) => {
  const result = numberToFix((s / a) * b);
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  } else {
    return result;
  }
};
export const F = (s, b) => numberToFix(s * b);
// const m = Number(parseFloat(VResult * 29.57).toFixed(2));
export const D = (x, g, b) => numberToFix(x * g * b);
// console.log(m);
export const P = (g, b) => numberToFix(g * b);

export const W = (Vres, Dres) => numberToFix(Vres * 29.57 - Dres);

export const O = (Wres) => numberToFix(Wres / 29.57);
