function solution(quiz) {
  return quiz.map((x) => {
    const [calc, answer] = x.split('=');

    return eval(calc) === Number(answer) ? 'O' : 'X';
  });
}