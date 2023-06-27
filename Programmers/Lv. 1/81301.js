// 숫자 문자열과 영단어
function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 10; i++) {
    while (s.includes(words[i])) s = s.replace(words[i], i);
  }

  return +s;
}

console.log(solution("one4seveneightone"));

// (1)
// function solution(s) {
//   let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }

// (2)
// function solution(s) {
//   let charSet = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   for (let [key, value] of Object.entries(charSet)) {
//     let re = new RegExp(key, "g");
//     s = s.replace(re, value);
//   }
//   return parseInt(s);
// }
