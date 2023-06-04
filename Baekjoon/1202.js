// 보석 도둑
// 런타임 에러 (해결X)
const fs = require("fs");
const [NK, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = NK.split(" ").map(Number);
const jewels = input.slice(0, N).map((x) => x.split(" ").map(Number));
const bags = input
  .slice(N)
  .map(Number)
  .sort((a, b) => a - b);

// 보석 무게 오름차순 정렬
jewels.sort((a, b) => a[0] - b[0]);

let price = 0;

for (let i = 0; i < K; i++) {
  const arr = [];
  //가방 무게보다 가벼운 보석들만 arr에 넣기
  for (let j = 0; j < jewels.length; j++) {
    if (jewels[j][0] <= bags[i]) {
      arr.push(jewels[j]);
    }
  }
  //가격순으로 정렬하고 제일 비싼 가격의 보석 채택 후, 해당 보석 삭제하기
  arr.sort((a, b) => b[1] - a[1]);
  price += arr[0][1];
  const idx = jewels.indexOf(arr[0]);
  jewels.splice(idx, 1);
}

console.log(price);
