function solution(cards1, cards2, goal) {
  let [idx1, idx2] = [0, 0];

  for (let word of goal) {
    if (cards1[idx1] === word) idx1++;
    else if (cards2[idx2] === word) idx2++;
    else return 'No';
  }

  return 'Yes';
}