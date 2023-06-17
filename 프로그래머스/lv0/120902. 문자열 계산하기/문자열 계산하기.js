function solution(my_string) {
    let arr = my_string.split(" ");
    let n = (arr.length - 1) / 2;
    let result = +arr[0];

    for (i = 1; i <= 2 * n; i += 2) {
        if (arr[i] === "+") result += (+arr[i + 1])
        else result -= (+arr[i + 1])
    }
    return result;
}