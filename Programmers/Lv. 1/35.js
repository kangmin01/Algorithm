//시저 암호
function solution(s, n) {
  let arr = s.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt();
    if (code === 32) {
      newArr.push(code);
      continue;
    }
    code += n;
    if ((code > 90 && arr[i].charCodeAt() <= 90) || code > 122) {
      code -= 26;
    }
    newArr.push(code);
  }
  let str = newArr.map((x) => String.fromCharCode(x));
  console.log(str.join(""));
}

solution("a b", 1);

//(1)
// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var answer = "";

//   for (var i = 0; i < s.length; i++) {
//     var text = s[i];
//     if (text == " ") {
//       answer += " ";
//       continue;
//     }
//     var textArr = upper.includes(text) ? upper : lower;
//     var index = textArr.indexOf(text) + n;
//     if (index >= textArr.length) index -= textArr.length;
//     answer += textArr[index];
//   }
//   return answer;
// }

//(2) Oh..
// function solution(s, n) {
//   var chars =
//     "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
//   return s
//     .split("")
//     .map((e) => chars[chars.indexOf(e) + n])
//     .join("");
// }


