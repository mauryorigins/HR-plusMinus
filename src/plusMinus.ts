/* eslint-disable no-plusplus */
export default function plusMinus(arr: number[]): void {
  // Write your code here
  const l = arr.length;
  let pos = 0;
  let neg = 0;
  let neu = 0;
  for (let i = 0; i < l; i++) {
    if (arr[i] < 0) {
      neg++;
    }
    if (arr[i] > 0) {
      pos++;
    }
    if (arr[i] === 0) {
      neu++;
    }
  }
  const propp = pos / l;
  const propneg = neg / l;
  const propneu = neu / l;

  console.log((propp).toFixed(6));
  console.log((propneg).toFixed(6));
  console.log((propneu).toFixed(6));
}
