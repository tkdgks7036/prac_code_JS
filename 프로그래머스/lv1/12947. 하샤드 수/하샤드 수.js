function solution(x) {
    return (x % (x + '').split('').map(Number).reduce((acc, cur) => acc + cur) === 0) ? true : false;
}