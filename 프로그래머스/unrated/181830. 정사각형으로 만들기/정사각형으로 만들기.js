function solution(arr) {
    let outer = arr.length;
    // idx 를 0 으로 설정한 이유 ? 모든 원소의 길이는 같다는 조건을 이용
    let inner = arr[0].length;

    // arr 전체 길이와 arr[0] 의 길이가 같을 때 ( 입출력 예 #3 )
    if (outer === inner) {
        return arr;
    }

    // arr 전체 길이가 크다면 ? ( 입출력 예 #1 )
    else if (outer > inner) {
        for (let i = 0; i < outer; i++) {

            // arr[idx] 길이와 arr 전체 길이가 같아질 때까지 마지막에 0 추가
            while (arr[i].length != outer) {
                arr[i].push(0);
            };
        };
    }

    // arr 원소의 길이가 크다면 ? ( 입출력 예 #2 )
    else if (outer < inner) {

        // arr 원소 길이와 arr 배열의 길이 차이만큼 arr 맨 뒤에 [0,0,0,0] 을 추가
        for (let i = 0; i < inner - outer; i++) {
            arr.push(Array(inner).fill(0));
        };
    };

    return arr;

};