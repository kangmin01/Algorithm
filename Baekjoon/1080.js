// 행렬
// 행렬A를 B로 바꾸기
const fs = require("fs");
const [NM, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const A = input.slice(0, N).map((e) => e.split("").map(Number));
const B = input.slice(N).map((e) => e.split("").map(Number));

const solution = (A, B) => {
  // 하나라도 다르면 false, 모두 똑같으면 true
  const check = (a, b) => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  };

  // 맨 처음 행렬이 같을 수 있으니까 비교
  if (check(A, B)) return 0;

  // 3*3 부분행렬 뒤집기, 좌측 위 인덱스 기준
  const flip = (x, y) => {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        A[i][j] = 1 - A[i][j];
      }
    }
  };

  let cnt = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        // 다르면 뒤집기
        flip(i, j);
        cnt++;
        //뒤집었으니까 나머지 부분이 같은지 확인
        //뒤집었을때, 두 행렬이 같으면 cnt를 출력 / 다르면 다음 요소를 확인
        if (check(A, B)) return cnt;
      }
    }
  }
  return -1;
};

console.log(solution(A, B));
