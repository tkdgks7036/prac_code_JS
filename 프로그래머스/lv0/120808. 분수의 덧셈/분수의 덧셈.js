function solution(numer1, denom1, numer2, denom2) {
  let answer = [];

  // 각 분수의 분모끼리 곱한다.
  let denom = denom1 * denom2;

  // 분자와 분모끼리 교차하여 곱한다.
  let numer = numer1 * denom2 + numer2 * denom1;

  let minNumber;
  if (denom < numer) minNumber = denom;
  else minNumber = numer;

  while (true) {
    if (numer % minNumber === 0 && denom % minNumber === 0) {
      numer = numer / minNumber;
      denom = denom / minNumber;
      return (answer = [numer, denom]);
    } else {
      minNumber--;
    }
  }
}