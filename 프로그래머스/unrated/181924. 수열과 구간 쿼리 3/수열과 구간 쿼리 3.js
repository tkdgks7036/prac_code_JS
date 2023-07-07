function change(arr, a) {
    tmp = arr[a[0]];
    arr[a[0]] = arr[a[1]];
    arr[a[1]] = tmp;

    return arr;
};

function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        change(arr, queries[i])
    };

    return arr;
};