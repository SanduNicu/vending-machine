export const withIds = (elements) => elements.map((el, index) => ({ id: index, ...el }));
export const withCodes = (elements, codeIndex) => elements.map(
  (el, index) => ({ code: index + 10 + codeIndex * elements.length, ...el }),
);

export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
