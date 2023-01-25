// 피보나치 수
// (1)바텀업
const fs = require("fs");
const input = +fs.readFileSync("./Baekjoon/input.txt").toString();

let arr = [];

arr = [0, 1];

for (let i = 2; i <= input; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[input]);
