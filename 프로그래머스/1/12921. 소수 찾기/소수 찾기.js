function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    // 1. 이미 소수가 아닌 인덱스는 Pass
    if (arr[i] === false) {
      continue;
    }
    // 2. 배수는 소수가 아니라 0
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  // 3. 소수의 개수 Count
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}