//두 정수 사이의 합
//오 문자열로 안풀고 숫자로도 풀었다!
function solution(a, b) {
  return (a + b) * ((Math.abs(a - b) + 1) / 2);
}

console.log(solution(2, 9));
