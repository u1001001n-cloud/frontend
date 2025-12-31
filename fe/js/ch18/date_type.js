/*
자료형(데이터 유형)
- boolean: 참(true), 거짓(false)
*/

let bool1 = true;
let bool2 = false;

console.log('bool1', bool1);
console.log('bool2', bool2);

console.log( 'typeof bool1:', typeof bool1 );
console.log( 'typeof bool1:', typeof(bool1)  );

/* [불린] 타입은 [비교 연산자의 결과]로 많이 사용된다. */

let n1 = 10, n2 = 20;
bool1 = n1 > n2;  // 꺽쇠(홀화살 괄호)는 비교 연산자의 표기
console.log('n1 > 10:', n1 > 10);  // '>' 는 '(~)초과'라는 뜻.
console.log('n1 >= 10:', n1 >= 10); // '>=' 는 '(~)이상'이라는 뜻.
console.log(' ------------------- ');
console.log('n2 <= 20:', n2 <= 20); // '<=' 는 '(~)이하'라는 뜻.
console.log('n2 < 20:', n2 < 20); // '<' 는 '(~)미만'이라는 뜻.
console.log(' ------------------- !는 반대라는 뜻 ');
console.log('n1 == n2:', n1 == n2); // '==' 는 '값이 같으면 트루'이라는 뜻.
console.log('n1 != n2:', n1 != n2); // '!=' 는 '==의 반대'라는 뜻.
console.log(' ------------------- 논리 연산자 ');
console.log(' !(n1 == n2):', !(n1 == n2) );
console.log(' !(n1 != n2):', !(n1 != n2) );
console.log(' ------------------- 논리 연산자 [ && ] (AND) ');
console.log(' true && true:', true && true );
console.log(' true && true && false:', true && true && false );
console.log(' ------------------- 논리 연산자 [ || ] (OR) '); //원화 키 쉬프트 누르고 클릭
console.log(' false || false:', false || false );
console.log(' false || true || false:', false || true || false );