function solution(n) {
    let a = Math.sqrt(n)
    return (n % a === 0) ? Math.pow(a + 1, 2) : -1
}