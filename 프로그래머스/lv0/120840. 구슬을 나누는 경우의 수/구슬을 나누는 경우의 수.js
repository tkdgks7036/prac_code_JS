function factorial(n) {
  let value = 1;
  if (n === 0) return 1;
  while (n > 1) value *= n--;
  return Math.round(value);
}

function solution(balls, share) {
  return Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
}