"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
let bet = percent/100/12;
let firstContribution = parseFloat(contribution);
let credit = parseFloat(amount);
let dateEnd = date;
let totalAmount;
let currentDate = new Date();
let quantityOfMonths;

quantityOfMonths = (dateEnd.getFullYear() - currentDate.getFullYear()) * 12 + (dateEnd.getMonth() - currentDate.getMonth());
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

 greeting = `Привет, мир! Меня зовут ${user}.`;
 
return greeting;
}