//피보나치 수2
const fs = require("fs");
const input = +fs.readFileSync("./Baekjoon/input.txt").toString();

let arr = [];

arr = [0, 1];

for (let i = 2; i <= input; i++) {
  arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
}

console.log(arr[input].toString());
