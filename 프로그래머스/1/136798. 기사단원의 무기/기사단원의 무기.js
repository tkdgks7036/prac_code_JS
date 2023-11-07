function solution(number, limit, power) {
  let answer = 0;

  for (let k = 1; k <= number; k++) {
    let count = 0;
    for (let i = 1; i * i <= k; i++) {
      if (k % i === 0) {
        count++;
        if (k / i != i) count++;
      }
    }
    
    answer += limit < count ? power : count;
  }
  return answer;
}