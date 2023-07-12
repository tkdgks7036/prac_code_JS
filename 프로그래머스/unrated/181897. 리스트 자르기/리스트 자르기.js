function solution(n, slicer, num_list) {
    // 문제와 동일하게 slicer 의 idx 들을 a, b, c 로 구조분해할당
    let [a, b, c] = [...slicer];

    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
    };
};