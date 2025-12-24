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
//이름을 주지 않는 일회용 함수(임시함수)
arr.forEach((item, idx) => {
  console.log(`arr[${idx}]: ${item}`);
});