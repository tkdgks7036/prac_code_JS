function solution(arr, k) {
    let new_arr = [...new Set(arr)];

    if (new_arr.length > k) {
        return new_arr.slice(0, k);
    } else {
        return [...new_arr, Array(k - new_arr.length).fill(-1)].flat();
    };
}