// storage_method03.js
// 자바스크립트에는 원래 객체가 없다. {}로 객체를 만들었을 뿐.

const arr = [
  { id: 'abc', name: '홍길동1' },
  { id: 'bcd', name: '홍길동2' },
  { id: 'cde', name: '홍길동3' }
];
const obj = {};
/*
for(let i=0; i<arr.length; i++){
  const key = arr[i].id;
  const value = arr[i];
  obj[key] = value;
}
console.log(obj);
*/
/*
arr.forEach(function(item){
  obj[item.id] = item;
});
console.log(obj);
*/

arr.forEach( item => obj[item.id] = item );
console.log(obj);
/*
const obj = {
  abc: { id: 'abc', name: '홍길동1' },
  bcd: { id: 'bcd', name: '홍길동2' },
  cde: { id: 'cde', name: '홍길동3' }
};


console.log(obj['bcd']);

for(const key in obj) {
  console.log(`key: ${key}`);
}
*/