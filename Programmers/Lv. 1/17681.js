// [1차] 비밀지도
function solution(n, arr1, arr2) {
  const map1 = arr1.map((x) => x.toString(2).padStart(n, "0"));
  const map2 = arr2.map((x) => x.toString(2).padStart(n, "0"));
  const map3 = [];

  for (let i = 0; i < n; i++) {
    let decodeStr = "";
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "0" && map2[i][j] === "0") {
        decodeStr += " ";
      } else {
        decodeStr += "#";
      }
    }
    map3.push(decodeStr);
  }
  return map3;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

// (1) 정규식 사용
// 비트연산자를 사용하면 toString으로 변환할 필요 없음.
// function solution(n, arr1, arr2) {
//   return arr1
//     .map((v, i) => n, (v | arr2[i]).toString(2).padStart(n, "0"))
//     .replace(/1|0/g, (a) => (+a ? "#" : " "));
// }

// (2) 다른 정규식 풀이
// function solution(n, arr1, arr2) {
//   return arr1.map((a, i) =>
//     (a | arr2[i])
//       .toString(2)
//       .padStart(n, 0)
//       .replace(/0/g, " ")
//       .replace(/1/g, "#")
//   );
// }
