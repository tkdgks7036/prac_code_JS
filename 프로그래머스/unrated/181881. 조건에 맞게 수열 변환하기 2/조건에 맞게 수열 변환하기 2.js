function solution(arr) {
    let cnt = 0;
    let point_arr = arr;

    while (true) {
        let change_arr = point_arr.map(x => {
            if (x >= 50 && x % 2 === 0) return x / 2;
            if (x < 50 && x % 2 === 1) return x * 2 + 1;
            return x;
        });

        // every() 메서드를 통해 기존 arr 과 map 을 적용한 arr 이
        // 서로 같은지 true or false 로 all_match 에 return
        const all_match = point_arr.every((x, idx) => x === change_arr[idx]);

        // all_match 값이 true 라면? 모든 값이 이전 arr 과 동일하다는 뜻
        // 때문에, break 를 통해 while 탈출
        if (all_match) break;
        
        cnt++;
        point_arr = change_arr;
    };

    return cnt;
};