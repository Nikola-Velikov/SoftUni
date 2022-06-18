function BiggestElement(matrix) {
    let arrayOfElements=[];
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            
        arrayOfElements.push(matrix[row][col])
        }

    }
    arrayOfElements.sort((a,b)=>b-a)
    console.log(arrayOfElements[0]);
}
BiggestElement([[20, 50, 10],
    [8, 33, 145]]
   )