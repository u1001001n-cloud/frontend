/* p.613 if.js
조건문(분기문, if문)

if(식 - 결과 타입은 boolean) {
  만약 식이 true라면 {} 중괄호 사이에 있는 모든 코드가 실행이 된다.
  false라면 실행이 되지 않는다.
}
*/
//rVal : 랜덤 밸류
// const rVal = ???; //1~25까지 랜덤 숫자 나올 수 있도록 작성해 주세요.

const val = parseInt((Math.random() * 25.0)) + 1;
console.log('val:', val);

//rVal값이 짝수였을 때만 "짝수입니다." 출력 (if문 이용)

//기본문
if( rVal % 2 == 0 ) {
  console.log('짝수입니다.')
};


if (rVal % 2 == 0) {
  console.log('짝수입니다.')
} //식이 트루일 경우 실행되는 중괄호
else {
  console.log('짝수입니다.')
}; //식이 펄스일 경우 실행되는 중괄호

console.log('--------------------');

//rVal 값이 15미만이면 "15보다 작습니다."가 출력되고 아니면 "15이상입니다."

if (rVal < 15) {
  console.log("15보다 작습니다.")
}
else {
  console.log("15이상입니다.")
};

/*
if (rVal < 20) {
  console.log("order")
}
else {
  console.log("young")
};
*/

