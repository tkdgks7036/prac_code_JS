function solution(polynomial) {
  // 1. 연산기호는 '+' 만 존재한다.
  // 2. 항과 연산기호 사이에는 항상 공백이 존재한다.
  const polyArr = polynomial.split(' + ');

  let xNum = 0;
  let num = 0;

  polyArr.forEach((x) => {
    if (x.includes('x')) {
      // 1. x 가 존재하면 제거를 한다.
      // 2. x 를 제거 후 공백이 된다면 그 자리에 '1' 을 삽입한다. ex) 3x => 3 // x => 1
      const removeX = x.replace('x', '') || '1';
      xNum += parseInt(removeX, 10);
    } else {
      num += parseInt(x);
    }
  });

  let answer = [];

  if (xNum) answer.push(`${xNum === 1 ? '' : xNum}x`);
  if (num) answer.push(num);

  // 배열 내 값들 사이에 + 를 넣어 문자열로 만들고 return 한다.
  return answer.join(' + ');
}