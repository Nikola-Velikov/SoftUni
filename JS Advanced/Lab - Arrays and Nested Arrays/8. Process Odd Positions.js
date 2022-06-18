function ProcessOddPositions(arr) {
   return arr.filter((x,i)=>i%2).map(y=>y*2).reverse().join(" ")
}
console.log(ProcessOddPositions([10, 15, 20, 25])); 