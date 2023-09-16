function solution(arr, query) {
  let new_arr = [...arr];

  query.forEach((a, index) => {
    if (index % 2 === 0) new_arr.splice(query[index] + 1);
    else new_arr.splice(0, query[index]);
  });

  return new_arr;
}