//정수 내림차순으로 배치하기
function solution(n) {
  n = (n + "")
    .split("")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(+n.join(""));
}

solution(118372); //873211

//(1)
// function solution(n) {
//   const newN = n + "";
//   const newArr = newN.split("").sort().reverse().join("");

//   return +newArr;
// }

//(2)
// function solution(n) {
//   var nums = [];
//   do {
//     nums.push(n % 10);
//     n = Math.floor(n / 10);
//   } while (n > 0);

//   return nums.sort((a, b) => b - a).join("") * 1;
// }
