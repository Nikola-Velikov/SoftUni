function GCD(num1, num2) {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  console.log(num2);
}
GCD(15, 5);
