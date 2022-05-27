function SameNumbers(num) {
  num = num.toString();
  let arrFromNum = Array.from(num);
  let numberFromNum = arrFromNum.shift();
  let array = [];
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == numberFromNum) {
      array.push(true);
    }
    sum += Number(num[i]);
  }
  if (array.length == num.length) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log(sum);
}
SameNumbers(1234);
