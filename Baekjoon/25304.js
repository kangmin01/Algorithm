//영수증
const fs = require("fs");
const input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

const total = +input[0];
const num = +input[1];

let sum = 0;

for (let i = 2; i <= num + 1; i++) {
  let [price, cnt] = input[i].split(" ").map(Number);
  sum += price * cnt;
}

console.log(total === sum ? "Yes" : "No");
