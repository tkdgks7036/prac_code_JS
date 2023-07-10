let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

function solution(babbling) {

    // Todo => map
    return babbling.map(x => { // 'ayaye'
        let speak = ["aya", "ye", "woo", "ma"];

        for (let i = 0; i < speak.length; i++) {
            // 발음할 수 있는 값을 기준으로 split
            // join(' ') 을 한 이유?
            // join('') 을 하게되면 공백없이 붙여지기 때문에
            // 값이 합쳐지면서 불가능한 발음이 가능하게 되어버리는 경우를 방지하기 위함

            // ex. wyeoo => ye 를 기준으로 split => ['w', '', 'oo]
            // join('') 을 하게되면 woo 가 되어버림
            x = x.split(speak[i]).join(' ');

            // speak[0] => 'aya' => 'ayaye'.split('aya') => ['', 'ya'] => [' ye']
            // speak[1] => ' ye' => ' ye.split('ye') => ['', '']
        };

        return x;
    })
    
    // Todo => filter
    .filter(x => {
        let pattern = /[a-z]/;
        // a-z 중 하나라도 포함이 되는지 확인하기 위함
        return !pattern.test(x)
    }).length;
};

console.log(solution(babbling));
