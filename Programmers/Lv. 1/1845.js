// 폰켓몬
function solution(nums) {
  const select = nums.length / 2;

  const set = new Set(nums);
  const arr = [...set];

  if (arr.length >= select) {
    return select;
  } else {
    return arr.length;
  }
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));

// (1)
// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];

//   return arr.length > max ? max : arr.length;
// }
