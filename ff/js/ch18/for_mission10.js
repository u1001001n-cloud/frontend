// for_mission10.js

const star = parseInt(Math.random() * 5.0) + 3; //3~7사이 랜덤값
console.log("star:", star);

for (let i = 1; i <= star; i++) {
  let str = "";

  for (let k = 1; k <= star; k++) {
    if (k <= star - i) {
      str += "_";
    } else {
      str += "*";
    }
  }

  console.log(str);
}

/*

star: 6
_____*
____**
___***
__****
_*****
******

*/
