/* for_mission05.js */

const dan = parseInt(Math.random() * 8.0) + 2;
console.log("dan:", dan); //5

//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//...
//5 x 9 = 45

for (let i = 1; i < 10; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}
