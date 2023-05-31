const root1 = document.querySelectorAll('dl') [0];
const biscuits1 = document.querySelectorAll('.count') [0];
const donuts1 = document.querySelectorAll('.count') [1];
const pancakes1 = document.querySelectorAll('.count') [2];
const status1 = document.querySelectorAll('dd') [3];

biscuits1.innerHTML = root1.dataset.biscuits;
donuts1.innerHTML = root1.dataset.donuts;
pancakes1.innerHTML = root1.dataset.pancakes;
status1.innerHTML = root1.dataset.delivered;

if (root1.dataset.delivered === "true") {
    status1.innerHTML = 'Delivered';
} else {
    status1.innerHTML = 'Pending';
}

const root2 = document.querySelectorAll('dl') [1];
const biscuits2 = document.querySelectorAll('.count') [3];
const donuts2 = document.querySelectorAll('.count') [4];
const pancakes2 = document.querySelectorAll('.count') [5];
const status2 = document.querySelectorAll('dd') [7];

biscuits2.innerHTML = root2.dataset.biscuits;
donuts2.innerHTML = root2.dataset.donuts;
pancakes2.innerHTML = root2.dataset.pancakes;
status2.innerHTML = root2.dataset.delivered;

if (root2.dataset.delivered === "true") {
    status2.innerHTML = 'Delivered';
} else {
    status2.innerHTML = 'Pending';
}

const root3 = document.querySelectorAll('dl') [2];
const biscuits3 = document.querySelectorAll('.count') [6];
const donuts3 = document.querySelectorAll('.count') [7];
const pancakes3 = document.querySelectorAll('.count') [8];
const status3 = document.querySelectorAll('dd') [11];

biscuits3.innerHTML = root3.dataset.biscuits;
donuts3.innerHTML = root3.dataset.donuts;
pancakes3.innerHTML = root3.dataset.pancakes;
status3.innerHTML = root3.dataset.delivered;

if (root3.dataset.delivered === "true") {
    status3.innerHTML = 'Delivered';
} else {
    status3.innerHTML = 'Pending';
}