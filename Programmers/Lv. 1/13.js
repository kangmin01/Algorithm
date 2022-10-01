//콜라츠 추측
function solution(num) {
  let cnt = 0;
  while (num !== 1) {
    if (num === 1) return 0;
    if (cnt >= 500) return console.log(-1);
    else if (num % 2 === 0) {
      num /= 2;
      cnt++;
    } else {
      num = num * 3 + 1;
      cnt++;
    }
  }
  return console.log(cnt);
}

solution(626331);

//(1) wow...
// function collatz(num) {
//   var answer = 0;
//   while (num != 1 && answer <= 500) {
//     num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
//     answer++;
//   }
//   return num == 1 ? answer : -1;
// }
