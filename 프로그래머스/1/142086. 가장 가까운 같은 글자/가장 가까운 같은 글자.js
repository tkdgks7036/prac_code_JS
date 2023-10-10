function solution(s) {
  return [...s].map((x, idx) => {
    const slice = s.slice(0, idx);

    if (slice.includes(x)) return idx - slice.lastIndexOf(x);
    else return -1;
  });
}