function solution(k, tangerine) {
  const obj = {};

  // 크기가 같은 귤이 몇 개 있는지 Key & Value 형태로 변환
  // { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }
  tangerine.forEach((i) => {
    obj[i] = ++obj[i] || 1;
  });

  // 서로 다른 종류가 최소 k개를 충족하고 많은 크기가 같은 귤을 먼저 셈하기 위함
  const sameTang = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  // answer = 크기가 같은 귤을 셈할때 ++
  // sum += 상자 하나에 들어간 귤의 개수 ( = k )
  for (let check of sameTang) {
    answer++;
    sum += check;

    if (sum >= k) break;
  }

  return answer;
}