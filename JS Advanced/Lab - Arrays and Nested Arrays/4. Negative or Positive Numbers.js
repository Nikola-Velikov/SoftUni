function NegativeOrPositiveNumbers(arr) {
  let negative = [];
  let positive = [];
  for (let line of arr) {
    // console.log(line);
    if (line < 0) {
      //console.log(line);
      negative.unshift(line);
    } else {
      positive.push(line);
    }
  }
  for (let line of negative) {
    console.log(line);
  }
  for (let line of positive) {
    console.log(line);
  }
}
