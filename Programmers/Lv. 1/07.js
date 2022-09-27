//문자열 내 p와 y의 개수
function solution(s) {
  s = s.toLowerCase().split("");
  let cntP = 0;
  let cntY = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      cntP++;
    } else if (s[i] === "y") {
      cntY++;
    }
  }
  console.log(cntP === cntY ? "true" : "false");
}

solution("pPoooyY");

//(1)
// function numPY(s) {
//   return (
//     s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
//   );
// }

//(2)
// function numPY(s) {
//   return s.match(/p/gi).length == s.match(/y/gi).length;
// }

//(3)
// function solution(s) {
//   return [...s.toLowerCase()].reduce((acc, cur) => {
//     if (cur === "p") return acc + 1;
//     else if (cur === "y") return acc - 1;
//     return acc;
//   }, 0)
//     ? false
//     : true;
// }
