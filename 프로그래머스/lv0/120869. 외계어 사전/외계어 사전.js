function solution(spell, dic) {
    let str = spell.sort().join('');

    for (let i = 0; i < dic.length; i++) {
        dic[i] = dic[i].split('').sort().join('');
    };

    for (let i = 0; i <= dic.length; i++) {
        if (str === dic[i]) return 1;
    }

    return 2;
}