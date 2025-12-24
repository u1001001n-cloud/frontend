/* cb04_mission02.js

arr에서 짝수만 골라내고 나누기 2한 배열을 만들어 주세요.

*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

const arr2 = arr.filter( item => item % 2 === 0 ); // 짝수 골라낸 새 배열 만들기

const arr3 = arr2.map( item => item / 2 ); // 새 배열(arr2)에서 나누기 2한 새 배열(arr3) 만들기

console.log(arr3); // 최종 배열(arr3) 출력하기

console.log('----------------------------------');

//체이닝 기법
arr.filter( item => !(item % 2) )
    .map( item => item / 2 )
    .forEach(item => console.log('item:', item))
    ;