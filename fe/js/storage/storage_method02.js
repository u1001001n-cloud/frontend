// storage_method02.js

const obj = {};

for(let i=1; i<=100; i++){
  const temp = {
    id: i,
    name: `홍길동${i}`
  };
  obj[i] = temp;
}

console.log(obj);

const id20 = obj[20];
console.log(id20);

console.log(obj[25]);

/*
자바스크립트에서 속성 접근할 때 사용할 수 있는 방법이 2가지
.(점) 와 [](중괄호)
변수에 있는 값을 선택하려면 .이 아니라 중괄호[] 사용해야함.(그냥 속성은 .으로 선택)
*/