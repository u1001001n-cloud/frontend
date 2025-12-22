/* fn_mission03.js

*/

/*
function random(num) {
  return num = parseInt(Math.random() * ) + 0;
}

const randomValue = random(9); // 0~8 랜덤값을 리턴하는 함수를 만들어 주세요.
console.log('randomValue: ', randomValue);
*/

function random(num) {
  return parseInt(Math.random() * num);
}

const randomValue = random(9); // 0~8 랜덤값을 리턴하는 함수를 만들어 주세요.
console.log('randomValue: ', randomValue);

/* 위 function random의 (num) = 아래 const random의 (9) */