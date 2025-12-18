/* for_mission08.js */

const star = parseInt(Math.random() * 5.0) + 3; //3~7사이 랜덤값
console.log("star:", star);

for (let i = 1; i < star; i++) {
  console.log("*");
}

let str = "";

for (let i = 0; i < star; i++) {
  str += "*";
}

console.log(str);
