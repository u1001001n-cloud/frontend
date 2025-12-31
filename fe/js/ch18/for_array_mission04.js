/* for_array_mission04.js

배열에서 가장 큰 값과 가장 작은 값을 찾아서 출력해 주세요.

*/

const arr = [3, 8, 11, 86, 100, 43, 22, 27];
let max = arr[0],
  min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`최고값: ${min}, 최대값: ${max}`);

/*
-------------------------

const arr = [3, 8, 11, 86, 100, 43, 22, 27];
let max = arr[0], min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];  // 더 큰 값이면 max 갱신
  }
  if (arr[i] < min) {
    min = arr[i];  // 더 작은 값이면 min 갱신
  }
}

console.log("최댓값:", max);
console.log("최솟값:", min);
*/
