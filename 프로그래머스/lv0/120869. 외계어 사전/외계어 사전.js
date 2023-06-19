function solution(spell, dic) {
    let match_result = 2;

    dic.map(x => {
        let all_match = spell.every(a => x.includes(a));
        if (all_match) return match_result = 1;
    });

    return match_result;
};