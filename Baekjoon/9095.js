//1, 2, 3 더하기
const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n")
  .map((x) => +x);

let dp = [0, 1, 2, 4];

for (let i = 1; i <= input[0]; i++) {
  // const dp = new Array(input[i]).fill(0);
  // dp[1] = 1;
  // dp[2] = 2;
  // dp[3] = 4;

  for (let j = 4; j <= input[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[input[i]]);
}
