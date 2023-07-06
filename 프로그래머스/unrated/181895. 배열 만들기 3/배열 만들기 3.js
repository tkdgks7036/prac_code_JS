function solution(arr, intervals) {
    let flat_arr = intervals.flat();
    return [...arr.slice(flat_arr[0], flat_arr[1] + 1), ...arr.slice(flat_arr[2], flat_arr[3] + 1)];
};