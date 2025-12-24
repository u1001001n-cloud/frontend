/* cb02.js 배열의 forEach */

const arr = [ 3, 88, 76, 9, 34, 65 ];
function proc(item) {
  console.log(item);
}

arr.forEach(proc);
/* //forEach내부에서는 아래와 같은 작업을 한다.

for(let i=0; i<arr.length; i++) {
proc(arr[i], i);
}
*/

console.log('-----------------');
//이름을 주지 않는 일회용 함수(익명 함수) : 한 번만 쓰려고 즉석에서 만든 함수.
// 다시 안 쓸 코드에 이름 붙이기 귀찮거나 코드 흐름 바로 옆에서 동작 보고 싶을 때 쓴다.
arr.forEach((item, idx) => {
  console.log(`arr[${idx}]: ${item}`);
});