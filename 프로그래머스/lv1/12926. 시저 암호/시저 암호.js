function solution(s, n) {
    let upper_spell = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower_spell = 'abcdefghijklmnopqrstuvwxyz'

    let str = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] === " ") {
            str += " ";
            continue;
        };

        choose = upper_spell.includes(s[i]) ? upper_spell : lower_spell;
        search = choose.indexOf(s[i]) + n;

        if (search >= choose.length) search -= choose.length;
        str += choose[search];
    };

    return str;
}