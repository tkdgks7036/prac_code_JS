function solution(s) {
    return s.split(' ').map((a, idx) => (idx % 2 === 0) ? a.toUpperCase() : a.toLowerCase()).join(' ');
}