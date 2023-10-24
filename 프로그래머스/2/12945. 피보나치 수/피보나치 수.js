function solution(n) {
  const arr = [0, 1, 1];
  for (let i = 3; i <= n; ++i) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }
  return arr.at(-1);
}