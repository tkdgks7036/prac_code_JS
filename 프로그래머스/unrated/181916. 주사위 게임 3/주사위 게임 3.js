function solution(a, b, c, d) {
    let dice = [a, b, c, d]; // 각 주사위의 숫자담기
    let dice_info = {}; // 숫자별 몇 번 나왔는지 담기

    dice.forEach(x => {
        dice_info[x] = (dice_info[x] || 0) + 1;
    }); // 숫자별 몇 번 나왔는지 정보 가공

    let dice_num = Object.keys(dice_info).map(Number); // 나온 숫자만 담기
    let count = Object.values(dice_info).map(Number); // 동일한 숫자가 몇 번 나왔는지 담기

    let high_count = Math.max(...count);
    let low_count = Math.min(...count);

    if (dice_num.length === 1) return dice_num[0] * 1111;

    if (dice_num.length === 4) return Math.min(...dice_num);

    if (dice_num.length === 2) {
        let max_count = dice_num.find(x => dice_info[x] === high_count);
        let min_count = dice_num.find(x => dice_info[x] === low_count);

        if (high_count === 3) {
            return Math.pow(10 * max_count + min_count, 2);
        } else {
            return (dice_num[0] + dice_num[1]) * Math.abs(dice_num[0] - dice_num[1])
        };
    };

    if (dice_num.length === 3) {
        let least = dice_num.filter(x => dice_info[x] !== high_count);
        return least[0] * least[1];
    };
};