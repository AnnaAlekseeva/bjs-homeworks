function getResult(a,b,c){
"use strict";
   let k1 = a;
   let k2 = b;
   let k3 = c;
   let d;
   let x = [];
   

   d =  Math.pow(k2,2) -4 *k1*k3;
   
   if (d == 0) {
     x[0] = -k2 /(2 * k1);
   }
   else  if (d > 0) {
        x[0] = (-k2 + Math.sqrt(d)) / (2 * k1);
        x[1] = (-k2 - Math.sqrt(d)) / (2 * k1);
   }
    
    return x;
}

function getAverageMark(marks) {
  "use strict";
   let arrayMarks = marks;
   let averageMark;
   let Summa = 0;
   let length;
   
   length = arrayMarks.length;

   if (length === 0) {
    averageMark = 0;   
   } 
   else if (length > 5) {
    console.log("Введено больше 5 оценок");
    arrayMarks.splice(5,length - 5);
    length = 5;
   }

   if (averageMark !== 0) {
       for (const Mark of arrayMarks) {
         Summa = Summa + Mark;  
       }
       averageMark = Summa/length; 
   }

   
    return averageMark;
}

function askDrink(name,dateOfBirthday){
  "use strict";    
let user = name;
let dateOfBorn = dateOfBirthday;
let today = new Date(); 
let age;
let result;

age = today.getFullYear()-dateOfBorn.getFullYear(); 

result = (age > 18)? `Не желаете ли олд-фэшн, ${user}?` : `Сожалею, ${user}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;

return result;

}