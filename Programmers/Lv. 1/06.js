//자연수 뒤집어 배열로 만들기
function solution(n) {
  n = n.toString().split("").map(Number).reverse();
  return n;
}

//(1) 숫자 풀이
// function solution(n) {
//   var arr = [];

//   do {
//     arr.push(n % 10);
//     n = Math.floor(n / 10);
//   } while (n > 0);

//   return arr;
// }
