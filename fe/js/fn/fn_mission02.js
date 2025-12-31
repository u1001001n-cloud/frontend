/* fn_mission02.js

abs를 리턴함수로 만들고
콘솔에는 "절대값: 리턴한 값" 출력해 주세요.

리턴값이 10이였다 --> "절대값: 10" 의 형식으로 콘솔에 출력해 주세요.
*/

/*
function returnAdd(n1) {
  let sum = n1;
  return sum;
}

const absVal = returnAdd(10);

console.log('absVal:', absVal);
*/

function abs(num) {
  return num < 0 ? -num : num;
}

const result1 = abs(-10);
console.log('result1:', result1);