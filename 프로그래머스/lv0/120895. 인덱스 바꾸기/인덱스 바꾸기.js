function solution(my_string, num1, num2) {
    let head = my_string.substring(0, num1);
    let body = my_string.substring(num1 + 1, num2);
    let tail = my_string.substring(num2 + 1);

    return head + my_string[num2] + body + my_string[num1] + tail;
};