export default function getRandomArray(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}
