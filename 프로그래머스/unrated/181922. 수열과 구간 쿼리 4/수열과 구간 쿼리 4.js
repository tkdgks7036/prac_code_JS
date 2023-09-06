function solution(arr, queries) {
  const new_arr = [...arr];
  for (let a = 0; a < queries.length; a++) {
    const [s, e, k] = queries[a];

    for (let i = s; i <= e; i++) {
      if (i % k === 0) new_arr[i]++;
    }
  }
  return new_arr;
}