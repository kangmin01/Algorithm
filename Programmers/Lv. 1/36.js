//체육복
function solution(n, lost, reserve) {
  const overlap = lost.filter((x) => reserve.includes(x));

  const newLost = lost.filter((x) => !overlap.includes(x));
  const newReserve = reserve.filter((x) => !overlap.includes(x));

  const num = n - newLost.length;
  newLost.sort((a, b) => a - b);
  newReserve.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < newLost.length; i++) {
    for (let j = 0; j < newReserve.length; j++) {
      if (
        newLost[i] - 1 === newReserve[j] ||
        newLost[i] === newReserve[j] ||
        newLost[i] + 1 === newReserve[j]
      ) {
        count += 1;
        newReserve.splice(j, 1);
        break;
      }
    }
  }
  return count + num;
}

solution([2, 4], [1, 3, 5]); //5

// (1)
// function solution(n, lost, reserve) {
//   const students = {};
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     students[i] = 1;
//   }
//   lost.forEach((number) => (students[number] -= 1));
//   reserve.forEach((number) => (students[number] += 1));

//   for (let i = 1; i <= n; i++) {
//     if (students[i] === 2 && students[i - 1] === 0) {
//       students[i - 1]++;
//       students[i]--;
//     } else if (students[i] === 2 && students[i + 1] === 0) {
//       students[i + 1]++;
//       students[i]--;
//     }
//   }
//   for (let key in students) {
//     if (students[key] >= 1) {
//       answer++;
//     }
//   }
//   return answer;
// }
