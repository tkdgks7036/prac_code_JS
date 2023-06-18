function solution(arr) {
    if (arr.length === 1) return [-1];

    let new_arr = [...arr];
    let min = new_arr.sort((a, b) => b - a).at(-1);

    return arr.filter(x => x !== min);
}

// 리팩토링
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr),1));
//     return (arr.length < 1)? [-1] : arr;
// }