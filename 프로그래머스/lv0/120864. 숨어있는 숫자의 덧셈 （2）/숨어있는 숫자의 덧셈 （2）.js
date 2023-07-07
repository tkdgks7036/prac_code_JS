function solution(my_string) {
    let delete_alpha = my_string.split(/[a-z]/gi).filter(x => x != '');
    return delete_alpha.reduce((acc, cur) => acc + Number(cur), 0);
};