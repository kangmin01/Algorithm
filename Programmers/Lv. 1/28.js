//부족한 금액 계산하기
function solution(price, money, count) {
  let total = price * (((1 + count) * count) / 2);
  return total - money >= 0 ? total - money : 0;
}

solution(3, 20, 4);
