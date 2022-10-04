//핸드폰 번호 가리기
function solution(phone_number) {
  let front = phone_number.length - 4;
  let back = phone_number.slice(-4);
  let str = "*".repeat(front);
  str += back;
  console.log(str);
}

solution("01033334444");

//(1)
// function hide_numbers(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }
