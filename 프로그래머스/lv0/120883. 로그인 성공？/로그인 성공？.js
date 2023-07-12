function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        [id, pw] = db[i];
        if (id === id_pw[0] && pw === id_pw[1]) return 'login';
        else if (id === id_pw[0] && pw !== id_pw[1]) return 'wrong pw';
    };

    return 'fail'
};