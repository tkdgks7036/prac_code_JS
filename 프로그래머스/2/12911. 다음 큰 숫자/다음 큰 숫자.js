function solution(n) {
  const binary = n.toString(2);
  const curOne = binary.match(/1/g).length;

  while (true) {
    let nextBinary = (++n).toString(2);
    let nextOne = nextBinary.match(/1/g).length;
    if (curOne === nextOne) break;
  }

  return n;
}