//최소직사각형
function solution(sizes) {
  const w = [];
  const h = [];
  for (const size of sizes) {
    size.sort((a, b) => a - b);
    w.push(size[0]);
    h.push(size[1]);
  }
  return Math.max(...w) * Math.max(...h);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

//(1)
// reduce 활용하기
// function solution(sizes) {
//   const [hor, ver] = sizes.reduce(
//     ([h, v], [a, b]) => [
//       Math.max(h, Math.max(a, b)),
//       Math.max(v, Math.min(a, b)),
//       console.log("1 :", [h, v]),
//       console.log("2 :", [a, b]),
//     ],
//     [0, 0]
//   );
//   return hor * ver;
// }

//(2)
// function solution(sizes) {
//   const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

//   let maxSize = [0, 0];
//   rotated.forEach(([w, h]) => {
//     if (w > maxSize[0]) maxSize[0] = w;
//     if (h > maxSize[1]) maxSize[1] = h;
//   });
//   return maxSize[0] * maxSize[1];
// }
