/* continue_break.js
continue키워드와 break 키워드 사용법 학습

break: 나를 감싸고 있는 반복문 바로 빠져 나오기
continue: for문인 경우 증감식 순서로 바로 가고, while문이었으면 조건식 순서로 바로 간다.


*/

//1~10까지 세로로 오름차순으로 출력하는 반복문을 만들어 주세요.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("--끝--");

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log("--끝--");
