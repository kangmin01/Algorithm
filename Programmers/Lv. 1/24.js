//문자열 내림차순으로 배치하기
function solution(s) {
  return console.log([...s].sort().reverse().join(""));
}

solution("Zbcdefg");