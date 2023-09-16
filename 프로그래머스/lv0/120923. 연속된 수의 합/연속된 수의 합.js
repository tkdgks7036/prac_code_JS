function solution(num, total) {
  const initial_value = Math.ceil(total / num - Math.floor(num / 2));

  return Array.from({ length: num }, (_, idx) => idx + initial_value);
}