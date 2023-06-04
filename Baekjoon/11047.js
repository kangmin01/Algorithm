// 동전 0
const fs = require("fs");
const [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

let [N, K] = T.toString()
  .split(" ")
  .map((x) => +x);

// const coins = input.reverse().map((x) => +x);
// reverse 안되는 이유???
const coins = input.map((x) => +x).sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < N; i++) {
  if (coins[i] <= K) {
    const coin = Math.floor(K / coins[i]);
    K -= coin * coins[i];
    // K %= coins[i];
    count += coin;
  }
  if (K === 0) break;
}

console.log(count);
