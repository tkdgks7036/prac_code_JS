function solution(s) {
  // 1. 띄어쓰기를 기준으로 문자열을 나눈다.
  // 2. 나눈 문자열을 모두 소문자로 치환한다.
  s = s.split(' ').map((x) => x.toLowerCase());

  s = s.map((x) => {
    x = x.split('');

    // 공백문자가 연속해서 나올 경우, 띄어쓰기를 제거하기 위함
    if (x[0] === undefined) return;
    x[0] = x[0].toUpperCase();

    return x.join('');
  });

  return s.join(' ');
}