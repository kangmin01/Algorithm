//가운데 글자 가져오기
function solution(s) {
  if (s.length % 2 === 0) {
    return console.log(
      s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
    );
  } else {
    return console.log(s[Math.floor(s.length / 2)]);
  }
}
solution("abcde");

// (1)
// function solution(s) {
//   return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }

//(2)
// function solution(s) {
//   const mid = Math.floor(s.length / 2);
//   return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
// }
