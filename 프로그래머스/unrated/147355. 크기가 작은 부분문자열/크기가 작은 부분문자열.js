// 배열을 활용한 풀이
function solution(t, p) {
    let arr = [];
    let t_arr = [...t.split('')];

    for (let i = 0; i <= t.length - p.length; i++) {
        arr.push(t_arr.slice(i, p.length + i).join(''))
    };

    return arr.filter(x => x <= (+p)).length;

}

// // 문자열을 활용한 풀이
// function solution(t, p) {
//     let result = 0;

//     for (let i = 0; i <= t.length - p.length; i++) {
//         let num = t.substr(i, p.length);

//         if ((+num) <= (+p)) result++;
//     };

//     return result;
// }