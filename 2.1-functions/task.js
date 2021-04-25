"use strict";
function getSolutions(a,b,c){

   let D;
   let roots = [];
   
   D =  Math.pow(b,2) -4 *a*c;
   
   if (D === 0) {
    roots[0] = -b /(2 * a);
   }
   else  if (D > 0) {
    roots[0] = (-b + Math.sqrt(D)) / (2 * a);
    roots[1] = (-b - Math.sqrt(D)) / (2 * a);
   }
    
    return {D,roots};
}

function showSolutionsMessage(a,b,c){

    let result = getSolutions(a,b,c);

console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.` );
console.log(`Значение дискриминанта: ${result.D}.` );

if (result.roots.length === 0) {
 console.log("Уравнение не имеет вещественных корней");   
  }
else if (result.roots.length === 1) {
 console.log(`Уравнение имеет один корень X₁ =  ${result.roots[0]}.` );
  }
else {
 console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}` );  
  }
return result;
}

///////////////////////////////////////////////////////////////////////////
function getAverageMark(marks) {
   let averageMark;
   let summa = 0;

   if (marks.length === 0) {
    averageMark = 0;   
   } 
   else{
       for (const Mark of marks) {
         summa = summa + Mark;  
       }
       averageMark =  summa/marks.length;
   }

    return averageMark;
}

function  getAverageScore(data){
let marks = [];
let info = Object.assign({average: 0}, data);

    for (let sub in data){
       info[sub] = getAverageMark(data[sub]);
       marks.push(info[sub]);
   }
   
   info["average"] = getAverageMark(marks);

return info;
}

////////////////////////////////////////////////////////////////////
function getDecodedValue(secret){
  if (secret === 0) {
    return "Родриго";
  }
  else {
    return "Эмильо";
  }
}

function getPersonData(secretData){
  let person = {
    firstName: "",
    lastName: ""
  }
  
  for (let name in secretData){
    if (name === "aaa") {
      person.firstName = getDecodedValue(secretData[name]);
    }
    else{
      person.lastName = getDecodedValue(secretData[name]);
    }
  }

  return person;
}
