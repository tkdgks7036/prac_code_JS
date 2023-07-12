function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {

        // db[i] 번째의 값을 각각 id, pw 로 구조분해할당
        [id, pw] = db[i];

        // id_pw[0] : id & id_pw[1] : pw 로 항상 고정인 점을 이용
        if (id === id_pw[0] && pw === id_pw[1]) return 'login';
        else if (id === id_pw[0] && pw !== id_pw[1]) return 'wrong pw';
    };

    // id, pw 모두 맞지 않을 경우를 기본 값으로 두었다.
    return 'fail'
};