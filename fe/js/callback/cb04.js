/* cb04.js 배열의 map함수, 새로운 배열을 만든다.
아이템 값을 변경할 수 있다. 대신 길이가 변하진 않는다.

map : 원본의 배열이 있는데 데이터를 복사할 때, 아이템에 있는 값을 내가 원하는 값으로 변경이 가능하다.
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//아이템 모두 +2 처리한 새로운 배열 생성
//const arr2 = arr.map(item => item + 2);
const arr2 = arr.map( item => {
  return item + 2;
});
console.log(arr2);
console.log(arr);

//여기도 =이 [arr.map(item...]앞에 있어서 리턴 메소드