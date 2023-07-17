function solution(my_string, s, e) {
    let head = my_string.substring(0, s);
    let change = [...my_string.slice(s, e + 1)].reverse().join('');
    let tail = my_string.substring(e + 1);

    return head + change + tail;
};