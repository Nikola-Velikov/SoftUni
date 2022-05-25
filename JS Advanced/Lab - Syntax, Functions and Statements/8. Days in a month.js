/*function DaysInMonth(month,year) {
   let m;
    switch(month){
        case 1:m=(31);break;
        case 2:year%4==0 ? m=(29) :m=(28);break;
        case 3:m=(31);break;
        case 4:m=(30);break;
        case 5:m=(31);break;
        case 6:m=(30);break;
        case 7:m=(31);break;
        case 8:m=(31);break;
        case 9:m=(30);break;
        case 10:m=(31);break;
        case 11:m=(30);break;
        case 12:m=(31);break;
    }
    return m;

}*/
function DaysInMonth(month, year) {
  let date = new Date(year, month, 0).getDate();

  console.log(date);
}
DaysInMonth(2, 2021);
