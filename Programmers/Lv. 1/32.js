//이상한 문자 만들기
function solution(s) {
  let word = s.split(" ");
  let newWord = [];
  for (let i = 0; i < word.length; i++) {
    let elem = [];
    for (let j = 0; j < word[i].length; j++) {
      if (j === 0 || j % 2 === 0) {
        elem.push(word[i][j].toUpperCase());
      } else {
        elem.push(word[i][j].toLowerCase());
      }
    }
    newWord.push(elem.join(""));
  }
  console.log(newWord.join(" "));
}

solution("try hello world");

//(1)
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

//(2)
function toWeirdCase(s) {
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j))
        .join("")
    )
    .join(" ");
}
