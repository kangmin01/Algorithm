function solution(people, limit) {
  let boat = 0;
  people = people.sort((a, b) => b - a);
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    boat++;
  }
  return boat;
}

solution([70, 50, 80, 50], 100); // 3

//(1)
// function solution(people, limit) {
//   let biggest = 0,
//     count = 0,
//     i = 0;
//   people.sort((a, b) => a - b);
//   while (people.length > 0) {
//     biggest = people.pop();
//     i = 0;
//     while (people[i] <= limit - biggest) i++;
//     if (i) people.splice(i - 1, 1);
//     count++;
//   }
//   return count;
// }
