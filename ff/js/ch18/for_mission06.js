/* for_mission06.js
구구단 2단~9단까지 출력해 주시오.

2x1=2
2x2=4
2x3=6
...
----
4x1=4
----
9x9=81

*/

for (let dan = 2; dan < 10; dan++) {
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  if (dan < 9) {
    console.log("-----");
  }
}
