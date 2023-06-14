function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c) {
  return a * b * c;
}

function internal(a, b, c) {
  add();
  multiply();
}

console.log(multiply(2, 4, 8));
console.log(multiply(2, 2, 3));

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
