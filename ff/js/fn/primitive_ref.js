/* primitive_ref.js

프라머티브타입(일반타입) vs 레퍼런스타입(참조타입 : 주소값. 이거 빼면 전부 프라머티브 타입)

*/

const changeNum = (num) /*여기num과 아래 changeNum의 num은 다른 애! 공간이 다름.*/ => {
  num = 20;
}

let num = 10; //10은 주소값이 아닌 리터럴이라서 프라머티브 타입.
changeNum(num); //얘는 보이드 함수.(오직 호출만. 딴거 필요 X)
//뜻: changeNum 함수 호출하면서 num이 가지고 있는 값 전달
console.log('num:', num);

console.log('------------------------------------');
const changeBoxNum = (box) => {
  box.num = 20;
  //return box;
}

let box = {
  num: 10
};

console.log('box.num:', box.num);
changeBoxNum(box);
//const box2 = changeBoxNum(box);
console.log('box.num:', box.num); // 10
//console.log('box2.num:', box2.num); // 20