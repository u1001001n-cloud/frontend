/* object.js
자바스크립트에서 객체를 만드는 방법 : {} 중괄호로 만든다.

[ 객체 ]는[ (속성), (메소드(Method)) ] 로 이루어져 있다.

변수 : 값을 저장하기 위한 공간
객체가 가지고 있는 변수 = 속성
모든 '기능'을 통틀어 부르는 용어 = 메소드
밸류 속에 함수가 있으면 그게 메소드가 된다.
키: 값. 아래 문장의 value 같은 것.
key = value(속성값 or 함수(Function))
*/
const person1 = {
  name: '김철수3',
  age: 25,
  married: false,
  run: function() { console.log('나는 뛴다.!!!'); } //객체 안 속 함수 = 메소드
};

function run() { console.log('나는 뛴다.!!!'); };
run(); //객체 밖에 있으면 = 함수

/*상수인 person1에 저장되는 값은
객체(name: 김철수3, age: 25, m...등)의 메모리 주소값 하나!!!*/
// (메모리 = 램 RAM, CPU의 저장공간)
// {}속에 있는 내용은 가방 내용물 같은 것.(상수 아님.)
// person1은 가방 그 자체.(const일 때는 주소값은 변경 불가.)
// 주소값을 '담고 있는' 상수이고 'person1 = 주소값'은 아님.

/*
객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출을 할 수 있다.
[주소값 + .](점 포함) 주소값 쩜 -> 객체의 키(값) 

  객체 안에 객체가 (구조적으로) 있을 수 있다.
    예: bbb.abc.ddd.uuu라면, abc., ddd.안에 저장된 것은? = 객체.
*/

const str = 'aaa';
person1.run();

const person2 = person1; //shallow copy (얕은 복사, 주소값만.)
// 객체 자체를 복사하는 것은 deep copy (깊은 복사, 객체까지 복사함.)

/*객체는 하나지만 우리집 주소를 아는 사람은 여러명 있을 수 있듯이
한 주소를 둘이 가리키는 것도 가능하다.*/

const person3 = {
  name: '김철수',
  age: 25,
  married: false
};
//동등성, 동일성(같은 수준이냐, 완전히 같은 것이냐)에 대한 이야기
/* person1의 설정이 달라진다고 해서 person3의 설정까지 달라지진 않음.
하지만 둘의 조건이 모두 동일하기 때문에 '동등한' 상태임.
[const person2 = person;] 을 줌으로써
person2는 person1의 조건에 접근할 수 있으며 동일하지만,
person3은 완전히 독립된 개체임.
*/

console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
person1.name = '홍길동';
person2.age = 30;
console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
console.log('person1.age:', person1.age);
console.log('person2.age:', person2.age);