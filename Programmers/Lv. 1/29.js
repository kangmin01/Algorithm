//직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let res = [];
  let line = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    res.push(line);
  }
  console.log(res.join("\n"));
});

//(1)
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   const star = `${"*".repeat(a)}\n`;

//   console.log(star.repeat(b));
// });
