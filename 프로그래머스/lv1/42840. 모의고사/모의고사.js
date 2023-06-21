function solution(answers) {
    let student = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // let solution1 = answers.filter((x, idx) => x === student[0][idx]);
    // let solution2 = answers.filter((x, idx) => x === student[1][idx]);
    // let solution3 = answers.filter((x, idx) => x === student[2][idx]);

    let correct = student.map(
        a => answers.filter((x, idx) => x === a[idx % a.length]).length
    );

    let max_correct = Math.max(...correct);

    let answer = correct.reduce((acc, cur, idx) => {
        if (max_correct === cur) return [...acc, idx + 1];
        return [...acc];
    }, []);

    return answer;
}