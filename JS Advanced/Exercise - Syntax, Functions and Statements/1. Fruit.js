function Fruit(fruit, kilograms, pricePerKilo) {
  kilograms = kilograms / 1000;

  let price = (kilograms * pricePerKilo).toFixed(2);
  console.log(
    `I need $${price} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`
  );
}
Fruit("apple", 1563, 2.35);
