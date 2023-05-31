const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

const startingAfterTax = salary / 1.086;
let balance = startingAfterTax - rent -transport - food;
balance = balance.toFixed(2);

console.log(balance)

if ((hourOfDay && minuteOfDay !== null) & (hourOfDay && minuteOfDay == '00')) {}