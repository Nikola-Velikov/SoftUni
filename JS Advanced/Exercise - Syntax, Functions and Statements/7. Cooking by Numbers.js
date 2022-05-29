/* · chop - divide the number by two

· dice - square root of a number

· spice - add 1 to the number

· bake - multiply number by 3

· fillet - subtract 20% from the number*/
function CookingByNumbers(num,command1,command2,command3,command4,command5) {
  num = Number(num);
  let arr = [];
  let obj = {
    "chop" (){
      num = num / 2;

      console.log(num);
    },
    "dice"() {
      num = Math.sqrt(num);
      console.log(num);
    },
   "spice"() {
      num = num + 1;
      console.log(num);
    },
    "bake"() {
      num = num * 3;
      console.log(num);
    },
    "fillet"() {
      num = num * 0.8;
      console.log(num.toFixed(1));
    }
  }
  
  arr.push(command1, command2, command3, command4, command5);
  for (line of arr) {
 obj[line]()
}
}
CookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");//4.8
