function solution(s) {
  const answer = [0, 0];

  while (s.length > 1) {
    const delZero = (s.match(/0/g) || []).length;
    answer[0] += 1;
    answer[1] += delZero;

    s = (s.length - delZero).toString(2);
  }

  return answer;
}