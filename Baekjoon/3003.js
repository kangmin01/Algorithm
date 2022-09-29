//킹, 퀸, 룩, 비숍, 나이트, 폰
const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split(" ");

const piece = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < input.length; i++) {
  if (input[i] === piece[i]) {
    piece[i] = 0;
  } else if (input[i] >= piece[i]) {
    piece[i] = -(input[i] - piece[i]);
  } else {
    piece[i] = piece[i] - input[i];
  }
}
console.log(piece.join(" "));

//(1)
// let answer = input.map((i, index) => {
//   return chess[index] - i;
// });

// console.log(...answer);
