function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [x, y] = [Math.abs(a - n), Math.abs(b - n)];

    if (x === y) return b - a;

    return x - y;
  });
}