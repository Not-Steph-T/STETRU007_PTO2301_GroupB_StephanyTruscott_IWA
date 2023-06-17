const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// // Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

// console.log(first);
// console.log(second);
// console.log(third);

const result = [];

function extractBiggest() {
  if (first.length > second.length) {
    return first.pop();
  }
  if (second.length > third.length) {
    return second.pop();
  }
  return third.pop();
}

// // // Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
