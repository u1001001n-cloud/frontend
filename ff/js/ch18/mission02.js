// 4~12 랜덤값 나올 수 범위 만들어 주세요.

// let rand = Math.floor(Math.random() * (12 - 4 + 1)) + 4;
// console.log(rand);let rVal = Math.random();


//0에서 ~ ?(어떤) 값이 나와야한다. + 4했을때 어떤 값이어야 12가 나올까. = 8.
// 하지만 매스 랜덤에선 절대 1이 안나오기 때문에 (7.99999...) 원하는 값이 나오려면 +1해야한다. 고로 9.
const val = parseInt((Math.random() * 9.0)) + 4;
console.log('val:', val);