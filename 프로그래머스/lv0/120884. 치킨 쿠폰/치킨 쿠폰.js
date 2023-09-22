function solution(chicken) {
  let bonus = 0;

  while (chicken > 1) {
    chicken /= 10;
    bonus += chicken;
  }

  return Math.floor(bonus);
}