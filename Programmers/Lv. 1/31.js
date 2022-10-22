//같은 숫자는 싫어
//https://school.programmers.co.kr/questions/23471
//push 대신 filter

// 효율성 테스트 실패
// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(arr);
// }

function solution(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

solution([4, 4, 4, 3, 3]);

//(1)
// function solution(arr) {
//   return arr.filter((val, index) => val != arr[index + 1]);
// }
//마지막은 인덱스로 참조할 요소가 없어서 undefined와 비교한다.

//(2)
// let solution = (_) => _.filter((i, $) => i != _[--$]);
