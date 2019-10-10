export const withIds = (elements) => elements.map((el, index) => ({ id: index, ...el }));
export const withCodes = (elements) => elements.map((el, index) => ({ code: index + 10, ...el }));
