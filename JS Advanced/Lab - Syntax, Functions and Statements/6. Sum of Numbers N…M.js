function SumofNumbersNtoM(nToStr, mToStr) {
  let n = Number(nToStr);
  let m = Number(mToStr);
  let sum = 0;
  for (let i = n; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}
SumofNumbersNtoM("-8", "20");
