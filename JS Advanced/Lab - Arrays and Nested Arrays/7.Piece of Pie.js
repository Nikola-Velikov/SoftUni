function PieceofPie(list, start, end) {
  let first = list.indexOf(start);
  let last = list.indexOf(end);
  let result = list.slice(first, last + 1);

  return result;
}
PieceofPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
