var date = 2050;
var state = ['student', 'parent'];
var count = 0;

console.log('January', 'New Years Day');
console.log('March', 'Human Rights Day');
date = 'April';
console.log(date, 'Family Day');
console.log(date, 'Freedom Day');
count = count + 4;

if (state === 'student') {
    console.log('June', 'Youth Day');
    count = count + 1;
}

console.log('August', 'Womens Day');
console.log('September', 'Heritage Day');
date = 'December';
console.log(date, 'Day of Reconciliation');
console.log(date, 'Day of Goodwill');
count = count + 4;

if (state === 'parent') {
    console.log(date, 'Christmas Day');
    count = count + 1;
}

console.log('Your status is :', state = 'student');
console.log('The year is :', date);
console.log('The total holidays is :', count);