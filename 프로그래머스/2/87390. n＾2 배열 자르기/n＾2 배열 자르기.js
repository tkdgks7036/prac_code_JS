function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i++) {
    const yAxis = parseInt(i / n);
    const xAxis = i % n;
    arr.push(Math.max(yAxis, xAxis) + 1);
  }

  return arr;
}