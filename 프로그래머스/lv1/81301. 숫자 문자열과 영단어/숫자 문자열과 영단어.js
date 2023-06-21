function solution(s) {
    let numbers = ['zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'];

    let answer = s;

    for (let i = 0; i < numbers.length; i++) {
        if (s.includes(numbers[i])) {
            let pattern = new RegExp(numbers[i], 'g');
            answer = answer.replace(pattern, i);
        };
    };

    return Number(answer);
}