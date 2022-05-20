function CircleArea(radius) {
  let type = typeof radius;
  if (type == "number") {
    let S = Math.pow(radius, 2) * Math.PI;
    console.log(S.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
CircleArea(5);
