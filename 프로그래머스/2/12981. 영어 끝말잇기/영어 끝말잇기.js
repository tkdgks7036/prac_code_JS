function solution(n, words) {
  let answer = [0, 0];
  let stack = [];

  for (let i = 0; i < words.length; i++) {
    // 맨 처음 비교할 words 1개를 stack에 쌓기 위함
    if (!stack[0]) {
      stack.push(words[i]);
      continue;
    }

    if (stack.indexOf(words[i]) !== -1 || stack.at(-1).at(-1) !== words[i][0]) {
      // 배열 내 매개변수의 타입 === stack.at(-1)의 타입 === string
      // 즉, 특정 단어의 마지막 글자를 가져오기 위해 stack.at(-1).at(-1)
      answer = [(i + 1) % n ? (i + 1) % n : n, Math.ceil((i + 1) / n)];
      break;
    }

    stack.push(words[i]);
  }

  return answer;
}