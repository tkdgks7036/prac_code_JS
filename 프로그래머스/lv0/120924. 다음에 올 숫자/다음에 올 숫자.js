function solution(common) {
    if(((common[1] - common[0]) + common[1]) === common[2]) {
        gap = common[1] - common[0];
        return common[common.length -1] + gap
    }
    else {
        gap = common[1] / common[0];
        return common[common.length - 1] * gap;
    }
}