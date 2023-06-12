const obj = { firstName: "John", age: 35, hobby: "Coding" };

function hobby() {
  logTwice();
  logTwice();
}

const logTwice = () => {
  console.log(`Hello, ${obj.firstName} (${obj.age}). I love ${obj.hobby}!`);
};

hobby();
