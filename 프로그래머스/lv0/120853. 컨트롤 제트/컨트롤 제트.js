function solution(s) {
    let arr = [];

    // 문제의 제한사항을 참고하여 공백을 이용해서 split
    let new_arr = s.split(' ');

    // 공백을 제거한 new_arr 을 하나씩 체크하면서 'Z' 가 나오면
    // 이전 i 값을 통해 넣어둔 값을 다시 뽑아낸다
    // Why? Z 의 바로 앞에 있는 값과 합치면 항상 0 이라는 의미이기 때문이다.
    for (let i = 0; i < new_arr.length; i++) {
        if (new_arr[i] === 'Z') arr.pop();
        else arr.push(new_arr[i]);
    };

    // 현재 arr 안에 담겨있는 값들은 string
    // Number 변환 및 초기값을 0으로 설정해줄 것
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
};
