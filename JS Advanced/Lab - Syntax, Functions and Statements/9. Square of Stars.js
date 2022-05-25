function SquareofStars(stars) {
  if (stars == undefined || stars == "") {
    stars = 5;
  }
  for (let i = 1; i <= stars; i++) {
    console.log("* ".repeat(stars));
  }
}
SquareofStars();
