let foodBill = 5.00;
let tipAmount = 0.5;
let totalTip = foodBill * tipAmount;
console.log(totalTip);
let totalBill = totalTip + foodBill; 
console.log(totalBill);
console.log(`The tip on $${foodBill.toFixed(2)}; food bill is $${totalBill}`);