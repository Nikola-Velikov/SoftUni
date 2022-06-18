function BiggerHalf(arr) {
  let BiggerHalf = [];
  let length = arr.length;
  if (length % 2 == 0) {
    let sorted = arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length / 2; i++) {
      BiggerHalf.push(sorted[i]);
    }
  }
  if (length % 2 !== 0) {
    let sorted = arr.sort((a, b) => b - a);
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
      BiggerHalf.push(sorted[i]);
    }
  }
  return BiggerHalf.sort((a, b) => a - b);
}
console.log(BiggerHalf([3, 19, 14, 7, 2, 19, 6]));
