export const getRandomArray = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
