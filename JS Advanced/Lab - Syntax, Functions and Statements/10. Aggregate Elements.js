function AggregateElements(arr) {
  sum = 0;
  let divedeByOne = 0;
  let Str = "";
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    divedeByOne += 1 / arr[index];
    let indexToStr = arr[index].toString();
    Str += indexToStr;
  }
  console.log(sum);
  console.log(divedeByOne);
  console.log(Str);
}
AggregateElements([1, 2, 3]);
