function solution(strArr) {
  const dic = {};

  strArr.forEach((i) => {
    const leng = i.length;
    dic[leng] = dic[leng] ?? [];
    dic[leng].push(i);
  });

  const values = Object.values(dic).map((a) => a.length);
  return Math.max(...values);
}