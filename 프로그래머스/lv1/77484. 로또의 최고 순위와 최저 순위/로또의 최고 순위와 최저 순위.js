function solution(lottos, win_nums) {
    let rank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    };

    let unknown = lottos.filter(x => x === 0).length;
    let match = lottos.filter(x => win_nums.includes(x)).length;

    let max = match + unknown;
    let min = match;

    return [rank[max], rank[min]];
}