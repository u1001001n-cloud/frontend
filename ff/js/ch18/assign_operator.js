/* assign_operator.js
대입 연산자

*/
let n1 = 10; //let으로 변수 선언=값을 담기위한 박스를 생성함. 그 이름을 n1로 지음. 이를 식별자라고 함.
n1 = n1 + 5;
console.log('n1:', n1);

// 변수에 들어있는 값이 변경되려면 =(대입연산자) 필요
// 유일하게 대입연산자 없이 숫자 변수의 값을 변경할 수 있는 연산자가 있다.
// [++] 증가연산자, [--] 감소연산자.
// 둘다 1씩 증가, 1씩 감소한다.

//[값 변경은 무조건 쓰기 작업]. 값 참조는 읽기.

let n3 = 50;
n3++;
++n3;
console.log('n3:', n3);

--n3;
n3--;
n3--;
console.log('n3:', n3);

let n4 = 10;
let result4 = n4++; //읽기 > 쓰기

let n5 = 10;
let result5 = ++n5; //쓰기 > 읽기

console.log('result4:', result4); //10
console.log('result5:', result5); //11
console.log('n4:', n4);
console.log('n5:', n5);

console.log(' ------------------- ');
let n6 = 10;
n6++; //쓰기
console.log('n6:', n6); //읽기

let n7 = 10;
console.log('n7++:', n7++); //10
console.log('n7:', n7); //11

let n8 = 10;
console.log('++n8:', ++n8); //11
console.log('n8:', n8); //11