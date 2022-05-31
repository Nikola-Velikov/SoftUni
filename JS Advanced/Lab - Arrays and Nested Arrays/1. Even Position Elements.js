function EvenPositionElements(array) {
  let NumbersInEvenPosition = [];
  for (let i = 0; i < array.length; i += 2) {
    NumbersInEvenPosition.push(array[i]);
  }
  console.log(NumbersInEvenPosition.join(" "));
}
