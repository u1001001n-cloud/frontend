// 랜덤 10~19
// dan 10~19일때 구구단이 1부터 19까지 있게

const dan = parseInt(Math.random() * 10.0) + 10;
console.log(dan);

for (let i = 1; i < 20; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}
