const leoName = 'Leo  '
const leoSurname = 'Musvaire  '
const leoBalance = '-9394'

const sarahName = 'Sarah  '
const sarahSurname = 'Kleinhans  '
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let leoOwes = parseFloat(leoBalance) * -1;
let sarahOwes = parseFloat(sarahBalance) * -1;

let owes = leoOwes + sarahOwes;

const thousands = owes / 1000;
const hundreds = owes % 1000;


const leo = `${leoName} ${leoSurname .trim()} (Owed: R ${leoOwes.toFixed(2)})`
const sarah = `${sarahName} ${sarahSurname .trim()} (Owed: R ${sarahOwes.toFixed(2)})`
const total = `Total amount owed R:    ${thousands.toFixed(0)}${hundreds.toFixed(2)}`

console.log('', leo, '\n', sarah, '\n', divider, '\n', '', total, '\n', divider)
