// RGB거리
const fs = require("fs");
let [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

T = +T;
input = input.map((x) => x.split(" ").map((x) => +x));

let dp = [...new Array(T + 1)].map((v) => new Array(3).fill(0));

dp[1] = input[0];

for (let i = 2; i <= T; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i - 1][2];
}
console.log(Math.min(...dp[T]));

console.log(dp[T]);
