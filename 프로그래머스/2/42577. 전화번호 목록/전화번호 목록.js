function solution(phone_book) {
  phone_book.sort();

  // .some() 메소드는 Array 배열의 각 요소에 대해 실행할 함수를 설정한다.
  // 설정한 함수가 통과하면 True, 아니라면 False 반환
  const isPrefix = phone_book.some((book, idx) => {

    // .startsWith() 메소드는 다음 매개변수의 시작이 지정된 매개변수로 시작하는지 확인
    // '?'를 사용한 이유는 배열의 마지막 매개변수는 비교할 대상이 없기 때문에 undefined 를 방지하기 위함
    return phone_book[idx + 1]?.startsWith(book);
  });

  return !isPrefix;
}