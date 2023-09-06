function solution(numLog) {
  let result = '';
  for (let i = 0; i < numLog.length; i++) {
    const n = numLog[i + 1] - numLog[i];
    switch (n) {
      case 1:
        result += 'w';
        break;
      case -1:
        result += 's';
        break;
      case 10:
        result += 'd';
        break;
      case -10:
        result += 'a';
        break;
    }
  }

  return result;
}