function calculateTotalMortgage(percent, contribution, amount, date) {
"use strict";
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
 "use strict";   
 let user = name;
 let greeting;

if (user === "" || user === undefined) {
   user = "Аноним"; 
}

 greeting = `Привет, мир! Меня зовут ${user}.`;
 
return greeting;
}