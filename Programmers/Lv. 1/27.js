//행렬의 덧셈
function solution(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    let elem = [];
    for (let j = 0; j < arr1[i].length; j++) {
      elem.push(arr1[i][j] + arr2[i][j]);
    }
    res.push(elem);
  }
  console.log(res);
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);

//(1)
// function solution(A, B) {
//   return console.log(A.map((a, i) => a.map((b, j) => b + B[i][j])));
// }
