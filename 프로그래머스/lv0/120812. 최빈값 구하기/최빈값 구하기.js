function solution(array) {
  let setArray = [...new Set(array)]; // [1, 2, 3, 4]
  let cnt = [];

  // setArray 와 array 를 비교하여 동일한 요소가 Count
  for (let i = 0; i < setArray.length; i++) {
    let iCnt = array.filter((x) => x === setArray[i]).length;
    cnt.push(iCnt); // [1, 1, 3, 1]
  }

  // 최빈값 개수 Count
  let maxCnt = Math.max(...cnt); // 3
  let result = cnt.filter((x) => x === maxCnt).length > 1 ? -1 : setArray[cnt.indexOf(maxCnt)];

  return result;
}