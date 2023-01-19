//큰 수 만들기
function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack.splice(stack.length - k, k);
  return console.log(stack.join(""));
}

solution("1924", 2); //94
solution("4321", 1); //432
solution("4177252841", 4); //775841

// (1)
// const solution = (number, k) => {
//   const stack = [];
//   let count = 0;

//   for (let i = 0; i < number.length; i++) {
//     const item = number[i];

//     if (stack.length === 0) {
//       stack.push(item);
//       continue;
//     }

//     while (stack[stack.length - 1] < item) {
//       stack.pop();
//       count++;

//       if (count === k) return stack.join("") + number.slice(i, number.length);

//       if (stack.length === 0) break;
//     }
//     stack.push(item);
//   }

//   return stack.join("").slice(0, number.length - k + count);
// };
