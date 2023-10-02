function solution(s) {
  let check = 0;

  for (let round of s) {
    round === '(' ? check++ : check--;
    if (check < 0) return false;
  }

  return check === 0 ? true : false;
}