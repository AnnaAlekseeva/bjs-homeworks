"use strict";
function getResult(a,b,c){

   let d;
   let x = [];
   
   d =  Math.pow(b,2) -4 *a*c;
   
   if (d === 0) {
     x[0] = -b /(2 * a);
   }
   else  if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
   }
    
    return x;
}

function getAverageMark(marks) {
   let averageMark;
   let summa = 0;

   if (marks.length === 0) {
    averageMark = 0;   
   } 
   else if (marks.length > 5) {
    console.log("Введено больше 5 оценок");
    marks.splice(5,);
   }

   if (averageMark !== 0) {
       for (const Mark of marks) {
         summa = summa + Mark;  
       }
       averageMark =  summa/marks.length;
   }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
  
let today = new Date(); 
let age;
let result;

age = today.getFullYear() - dateOfBirthday.getFullYear(); 

result = (age > 18)? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;

return result;

}