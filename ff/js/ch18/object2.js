/* object2.js
*/
const aaa = {
  name: '김철수',
  age: 25,
  married: false
};
// {}안에 속성을 넣음으로써 객체를 만들었을 뿐 객체 자체의 이름을 붙이진 않음.
// 객체는 객체. 포괄해서 부르는 이름은 없음. 객체의 주소값만 aaa에 입력되고,
// aaa는 just 심볼임(상수).
console.log(typeof aaa);
console.log(aaa);

/* aaa를 적용한 부분의 이름만 바꾸기
1. aaa 우클릭
2. rename simbol(F2)
3. bbb로 변경
4. aaa를 쓴 부분만 전부 bbb로 바뀜.
(주의) aaa, bbb는 그냥 예시.
*/

//person1이 가리키고 있는 객체의 married 속성값을 true로 수정하시오.

const person1 = {
  name: '김철수',
  age: 25,
  married: false
};
// Object.assign(person1, { married: true });
// person1.married = true;
console.log(person1);

/*
const person1 = {
  name: '김철수',
  age: 25,
  married: false
};
console.log(!person1.married);
*/

/*
심화(나중에)
// const human - {
//   name: '홍길동',
//   backpack: {
//     space: {
//       money: 10000,
//       coin: {

//       }
//     }
//   }
// };

// console.log(human.backpack.space.money);
*/