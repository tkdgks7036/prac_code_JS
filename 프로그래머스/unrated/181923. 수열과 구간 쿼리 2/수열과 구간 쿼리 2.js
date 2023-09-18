function solution(arr, queries) {
  const answer = [];

  for (const [s, e, k] of queries) {
    const value = arr.filter((a, idx) => s <= idx && idx <= e && a > k).sort((a, b) => a - b)[0];
    answer.push(value ? value : -1);
  }

  return answer;
}