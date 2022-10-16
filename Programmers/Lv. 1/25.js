//문자열 다루기 기본
function solution(s) {
  let num = s.length;
  if (
    (num === 4 || num === 6) &&
    num === [...s].filter((x) => isNaN(parseInt(x)) === false).length
  ) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
solution("1s34");

//(1)
// function solution(s) {
//   var regex = /^\d{6}$|^\d{4}$/; // {6}=>일치하는 숫자가 6개 있는가
//   return regex.test(s);
// }

//(2)
