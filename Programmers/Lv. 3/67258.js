// [카카오 인턴] 보석 쇼핑
// https://tech.kakao.com/2020/07/01/2020-internship-test/

function solution(gems) {
  const gemVarietyCounts = new Set(gems).size;

  const gemMap = new Map();
  const gemLengths = [];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === gemVarietyCounts) {
      gemLengths.push([gemMap.values().next().value + 1, i + 1]);
    }
  });

  gemLengths.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });

  return gemLengths[0];
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
// console.log(solution(["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"]));
// console.log(solution(["RUBY", "RUBY", "DIA"]));
// console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
// console.log(solution(["XYZ", "XYZ", "XYZ"]));
// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));

// function solution(gems) {
//   kind = [...new Set(gems)];

//   let num = 0,
//     start = 0,
//     end = 0;
//   let gemsList = {};
//   let res = [];

//   for (const k of kind) {
//     gemsList[k] = null;
//   }

//   while (end < gems.length) {
//     if (end === 0) {
//       gemsList[gems[end]] = end;
//       end++;
//       num++;
//       continue;
//     }

//     if (gems[start] !== gems[end]) {
//       if (gemsList[gems[end]] === null) {
//         num++;
//       }
//       gemsList[gems[end]] = end;
//       end++;
//     } else {
//       start++;
//       if (start === end) {
//         end++;
//         continue;
//       }

//       while (gems[start] === gems[start + 1]) {
//         start++;
//       }
//       if (gemsList[gems[start]] !== start) {
//         start++;
//       }
//     }

//     if (kind.length === num) {
//       res.push([start, end]);
//     }
//   }

//   return [start + 1, end];
// }
