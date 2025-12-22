/* fn_mission05.js

*/


//함수 정의
function printStarLine(num) {
  let str = '';
  for(let i=0; i < num; i++) {
    str += '*';
  }
  console.log(str);
}


//함수 호출 // 별 개수를 지정해줌 X 반복 멈출 기준값 O
printStarLine(5);
//*****

printStarLine(3);
//***


console.log('---------------------- square');



function printStarSquare(num) {
  for(let k=0; k < num; k++) {
    let str = '';
    for(let i = 0; i < num; i++) {
      str += '*';
    }
    console.log(str);
  }
}


printStarSquare(5);
//*****
//*****
//*****
//*****
//*****

printStarSquare(3);
//*****
//*****
//*****

console.log('---------------------- square2');

function printStarSquare(num) {
  for(let k=0; k < num; k++) {
    printStarLine(num);
  }
}

printStarSquare(5);
//*****
//*****
//*****
//*****
//*****

printStarSquare(3);
//*****
//*****
//*****

console.log('---------------------- triangle');

function printStarTriangle(num) { 
  for(let j=1; j <= num; j++) {
    printStarLine(j);
  }
}

printStarTriangle(5);
// *
// **
// ***
// ****
// *****

printStarTriangle(3);
// *
// **
// ***