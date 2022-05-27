function PrviousDay(year, month, day) {
  let dateInInput = `${year}-${month}-${day}`;
  let date = new Date(dateInInput);
  date.setDate(date.getDate() - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
PrviousDay(2016, 10, 1);
