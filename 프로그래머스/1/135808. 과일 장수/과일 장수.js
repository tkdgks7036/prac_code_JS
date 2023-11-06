function solution(k, m, score) {
  score = score.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 0; i <= score.length; i++) {
    if (score[m * i - 1] !== undefined) answer += score[m * i - 1] * m;
  }

  return answer;
}