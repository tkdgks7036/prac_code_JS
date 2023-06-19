// function solution(spell, dic) {
//     let match_result = 2;

//     dic.map(x => {
//         let all_match = spell.every(a => x.includes(a));
//         if (all_match) return match_result = 1;
//     });

//     return match_result;
// };

function solution(spell, dic) {
    var answer = 0;
    let spe = spell.sort().join(''); // 'dxz'
    let ddic = [];
    // let mat2;

    for (let i = 0; i < dic.length; i++) {
        dic[i] = [...dic[i]].sort().join('');
        ddic.push(dic[i]);
    }; // [ 'def', 'dww', 'dxz', 'aelovw' ]

    mat2 = ddic.includes(spe);
    console.log(mat2);

    return mat2 ? 1 : 2
}