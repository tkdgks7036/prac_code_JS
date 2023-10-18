function solution(elements) {
  let set = new Set();
  const circulator = elements.concat([...elements]);

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      sum += circulator[i + j];
      // set에 elements를 추가하기 위해서는 push가 아니라 add이다.
      // push는 Array에서 사용
      set.add(sum);
    }
  }

  // Set의 길이를 반환하는 메소드는 length가 아니라 size이다.
  // length는 Array에서 사용
  return set.size;
}