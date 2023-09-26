function solution(s) {
  let answer = '';

  const sArr = s.split(' ').map((x) => +x);
  const minValue = Math.min(...sArr);
  const maxValue = Math.max(...sArr);

  return (answer = `${minValue} ${maxValue}`);
}