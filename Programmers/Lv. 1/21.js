//수박수박수박수박수박수?
function solution(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    res += i % 2 == 0 ? "박" : "수";
  }
  return console.log(res);
}

solution(3);

// //(1)
// const soulutioin = (n) => {
//   return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
// };

// //(2)
// const solution = (n) => "수박".repeat(n).slice(0, n);
