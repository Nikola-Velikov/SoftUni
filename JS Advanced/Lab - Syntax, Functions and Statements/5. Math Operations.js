function MathOperations(num1, num2, symbol) {
  if (symbol == "+") {
    console.log(num1 + num2);
  } else if (symbol == "-") {
    console.log(num1 - num2);
  }
  if (symbol == "*") {
    console.log(num1 * num2);
  } else if (symbol == "/") {
    console.log(num1 / num2);
  }
  if (symbol == "%") {
    console.log(num1 % num2);
  } else if (symbol == "**") {
    console.log(num1 ** num2);
  }
}
MathOperations(3, 2, "**");
