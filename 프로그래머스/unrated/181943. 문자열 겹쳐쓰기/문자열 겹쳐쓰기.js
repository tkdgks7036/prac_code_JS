function solution(my_string, overwrite_string, s) {
    let arr = [...my_string];
    arr.splice(s, overwrite_string.length, overwrite_string);

    return arr.join('');
}