function solution(k, score) {
  let answer = [];

  score.forEach((i, idx) => {
    const board = score
      .slice(0, idx + 1)
      .sort((a, b) => b - a)
      .slice(0, k);

    answer.push(Math.min(...board));
  });

  return answer;
}