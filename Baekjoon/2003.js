// 수들의 합 2
const fs = require("fs");
const input = fs.readFileSync("./Baekjoon/input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((x) => +x);
const arr = input[1].split(" ").map((x) => +x);

let count = 0;
let interval_sum = 0;
let end = 0;

for (const start of arr) {
  while (interval_sum < M && end < N) {
    interval_sum += arr[end];
    end++;
  }
  if (interval_sum === M) {
    count++;
  }
  interval_sum -= start;
}

console.log(count);
