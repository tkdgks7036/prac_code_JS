function solution(babbling) {

    return babbling.map(x => {
        let speak = ["aya", "ye", "woo", "ma"];

        for (let i = 0; i < speak.length; i++) {
            x = x.split(speak[i]).join(' ');
        };

        return x;
    })
        
    .filter(x => {
        let pattern = /[a-z]/;
        return !pattern.test(x)
    }).length;
};