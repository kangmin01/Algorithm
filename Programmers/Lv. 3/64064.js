// https://tesseractjh.tistory.com/248
function solution(user_id, banned_id) {
  const selected = Array(user_id.length).fill(false);

  const regex = banned_id.map(
    (id) => new RegExp(`^${id.replaceAll("*", ".")}$`)
  );

  const set = new Set();

  const dfs = (index = 0, arr = []) => {
    console.log(`dfs(${index},${arr}) 시작`);
    console.log("selected : ", selected);
    if (index === banned_id.length) {
      console.log(arr);
      console.log(arr.sort().join(","));
      set.add(arr.sort().join(","));
      console.log(set);
    } else {
      for (let i = 0; i < user_id.length; i++) {
        console.log(i, user_id[i]);
        if (selected[i]) {
          console.log("이미 선택됨");
          continue;
        }

        if (user_id[i].match(regex[index])) {
          console.log("매칭 성공");
          selected[i] = true;
          console.log(`dfs(${index + 1},${[...arr, user_id[i]]}) 실행`);
          dfs(index + 1, [...arr, user_id[i]]);
          console.log(`dfs(${index + 1},${[...arr, user_id[i]]}) 완료한 다음`);
          selected[i] = false;
          console.log(i, selected);
        }
        console.log("아무것도 아님");
      }
    }
    console.log(`dfs(${index},${arr}) 완료`);
  };

  console.log("dfs(0,[]) 실행");
  dfs();

  return set.size;
}

console.log(
  solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])
);
// console.log(
//   solution(
//     ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//     ["*rodo", "*rodo", "******"]
//   )
// );
// console.log(
//   solution(
//     ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//     ["fr*d*", "*rodo", "******", "******"]
//   )
// );
