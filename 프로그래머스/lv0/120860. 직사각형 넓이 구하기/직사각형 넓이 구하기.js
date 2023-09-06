function solution(dots) {
  let xdots = [];
  let ydots = [];

  for (let i = 0; i < dots.length; i++) {
    const [x, y] = dots[i];
    xdots.push(x);
    ydots.push(y);
  }

  const xMax = Math.max(...xdots);
  const xMin = Math.min(...xdots);

  const yMax = Math.max(...ydots);
  const yMin = Math.min(...ydots);

  const width = xMax - xMin;
  const height = yMax - yMin;

  return width * height;
}