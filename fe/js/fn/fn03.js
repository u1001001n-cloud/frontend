/* fn03.js

함수는 한가지 일만 하도록 정의를 한다. 그래야 재활용성이 높다.
함수가 함수를 호출할 수 있습니다.

함수가 나 자신을 호출할 수 있다. (재귀호출)

*/

function add(n1, n2){ return n1 + n2; } // 3 + 4
// 중괄호 속은 새로운 세상. 문법만 맞으면 function(함수) 속에 if문, for문 써도 된다.

function pow(num) { return num * num; } // 7 * 7

function addAndPow(n1, n2) {
  const result = add(n1, n2);
  return pow(result); //49
  //return 뒤에 식이 붙든 이름이 붙든 어떤 값을 들고가면 return(리턴) 함수가 되고, 아무것도 달지 않거나 return; 조차도 없으면 void(보이드) 함수이다.
}

const r1 = addAndPow(3, 4); //49
console.log('r1:', r1);