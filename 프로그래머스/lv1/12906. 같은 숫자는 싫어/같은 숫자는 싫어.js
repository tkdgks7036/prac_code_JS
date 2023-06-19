function solution(arr) {
    return arr.filter((a, idx, arr) => a !== arr[idx + 1]);
};