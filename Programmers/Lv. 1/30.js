//최대공약수와 최소공배수
// function solution(n, m) {
//   let res = [];
//   let n2 = n;
//   if (m % n === 0) {
//     res = [n, m];
//   } else {
//     let nArr = [];
//     let mArr = [];
//     for (let i = 1; i <= n; i++) {
//       if (n % i === 0) nArr.push(i);
//     }
//     for (let i = 1; i <= m; i++) {
//       if (m % i === 0) mArr.push(i);
//     }
//     console.log(nArr, mArr);
//     for (let i = 0; i < nArr.length; i++) {
//       for (let j = 0; j < mArr.length; j++) {
//         if (nArr[i] === mArr[j]) {
//           n = nArr[i];
//         }
//       }
//     }
//     res = [n, (n2 * m) / n];
//   }
//   console.log(res);
// }

//(1)
function solution(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  console.log([b, ab / b]);
}
solution(12, 40);

//(2)
// function greatestCommonDivisor(a, b) {
//   return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
// }
// function leastCommonMultipleOfTwo(a, b) {
//   return (a * b) / greatestCommonDivisor(a, b);
// }
// function gcdlcm(a, b) {
//   return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
// }
