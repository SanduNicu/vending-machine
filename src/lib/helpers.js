export const withIds = (elements) => elements.map((el, index) => ({ id: index, ...el }));
