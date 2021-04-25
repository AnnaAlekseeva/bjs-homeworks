"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
let bet = percent/100/12;
let firstContribution = parseFloat(contribution);
let credit = parseFloat(amount);


let currentDate = new Date();

if (date<= currentDate){
   console.log(`Параметр date содержит неправильное значение  ${date}`);
}

if (isNaN(percent) === true || percent == ""  ||  parseFloat(percent)<0 ){
   console.log(`Параметр percent содержит неправильное значение  ${percent}`);  
   return `Параметр percent содержит неправильное значение  ${percent}`;
}

if (isNaN(contribution) === true || contribution == ""  ||  parseFloat(contribution)<0 ){
   console.log(`Параметр contribution содержит неправильное значение  ${contribution}`);  
   return `Параметр contribution содержит неправильное значение  ${contribution}`;
}

if (isNaN(amount) === true || amount == ""  ||  parseFloat(amount)<0 ){
   console.log(`Параметр amount содержит неправильное значение  ${amount}`);  
   return `Параметр amount содержит неправильное значение  ${amount}`;
}


let quantityOfMonths;
quantityOfMonths = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth());

let totalAmount;
totalAmount = (credit - firstContribution) * (bet + bet / (Math.pow((1 + bet),quantityOfMonths) - 1)) * quantityOfMonths;
totalAmount = parseFloat(totalAmount.toFixed(2));
console.log(totalAmount);

return totalAmount;
}

function getGreeting(name) {
 let greeting;

if (name === "" || name === undefined) {
   name = "Аноним"; 
}

 greeting = `Привет, мир! Меня зовут.`;
 
return greeting;
}