function solution(name, yearning, photo) {
  const memoryScore = {};
  for (let i = 0; i < name.length; i++) {
    memoryScore[name[i]] = yearning[i];
  }

  // memoryScore[cur] || 0 을 통해 객체 안에 찾는 요소가 없으면 0 을 더한다.
  return photo.map((x) => x.reduce((acc, cur) => acc + (memoryScore[cur] || 0), 0));
}