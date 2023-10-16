function solution(s) {
  let checkArr = [];

  for (let i = 0; i < s.length; i++) {
    if (checkArr[checkArr.length - 1] === s.charAt(i)) {
      checkArr.pop();
    } else {
      checkArr.push(s.charAt(i));
    }
  }

  return checkArr.length === 0 ? 1 : 0;
}