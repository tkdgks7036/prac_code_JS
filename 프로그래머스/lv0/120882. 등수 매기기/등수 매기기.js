function solution(score) {
    let average = score.map(x => (x[0] + x[1]) / 2);
    let rank = Array.from(average);
    rank.sort((a, b) => b - a);

    return average.map(x => rank.indexOf(x) + 1);
}