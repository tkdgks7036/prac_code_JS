function solution(dots) {
  const [a, b, c, d] = dots;

  if (gradient(a, b) === gradient(c, d)) return 1;
  if (gradient(a, c) === gradient(b, d)) return 1;
  if (gradient(a, d) === gradient(b, c)) return 1;
  return 0;
}

function gradient(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}