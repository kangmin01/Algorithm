//모의고사
function solution(answers) {
  const studentAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  function grading(arr, answers) {
    let score = 0;
    let arrIdx = 0;

    for (let i = 0; i < answers.length; i++) {
      if (arrIdx === arr.length) {
        arrIdx = 0;
      }

      if (arr[arrIdx] === answers[i]) score++;
      arrIdx++;
    }
    return score;
  }

  const scores = [];
  for (let i = 0; i < studentAnswers.length; i++) {
    scores.push(grading(studentAnswers[i], answers));
  }

  const maxNum = Math.max(...scores);
  const result = [];
  for (let i = 0; i < scores.length; i++) {
    if (maxNum === scores[i]) result.push(i + 1);
  }
  return result;
}

console.log("1: ", solution([1, 2, 3, 4, 5]));
console.log("2: ", solution([1, 3, 2, 4, 2]));

//(1)
// function solution(answers) {
//   var answer = [];
//   var a1 = [1, 2, 3, 4, 5];
//   var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
//   var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
//   var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
//   var max = Math.max(a1c, a2c, a3c);
//   console.log(a1c, a2c, a3c);

// // answer 0 1 2 3 4 5 6 7 8 9
// // a1     0 1 2 3 4 0 1 2 3 4

//   if (a1c === max) {
//     answer.push(1);
//   }
//   if (a2c === max) {
//     answer.push(2);
//   }
//   if (a3c === max) {
//     answer.push(3);
//   }

//   return answer;
// }

//(2)
// function solution(answers) {
//   var answer = [];
//   const man1 = [1, 2, 3, 4, 5];
//   const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let count = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == man1[i % man1.length]) count[0]++;
//     if (answers[i] == man2[i % man2.length]) count[1]++;
//     if (answers[i] == man3[i % man3.length]) count[2]++;
//   }

//   const max = Math.max(count[0], count[1], count[2]);
//   for (let i = 0; i < count.length; i++) {
//     if (max == count[i]) answer.push(i + 1);
//   }

//   return answer;
// }
