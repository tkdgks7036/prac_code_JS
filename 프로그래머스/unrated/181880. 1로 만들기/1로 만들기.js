function solution(num_list) {
    return num_list.map(x => {
        cnt = 0;
        while (x != 1) {
            if (x % 2 === 0) x = x / 2;
            else x = (x - 1) / 2;
            cnt++;
        };

        return cnt;
    }).reduce((acc, cur) => acc + cur);
};