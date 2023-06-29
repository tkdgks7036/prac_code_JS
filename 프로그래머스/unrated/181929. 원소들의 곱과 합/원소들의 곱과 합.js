function solution(num_list) {
    let multi = num_list.reduce((acc, cur) => acc * cur);
    let square = num_list.reduce((acc, cur) => acc + cur) ** 2;

    return (multi < square) ? 1 : 0;
}