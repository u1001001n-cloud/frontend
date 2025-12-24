/* cb03.js 배열의 filter : 배열에서 필요한 아이템들만 쏙 뽑아서 새로운 배열을 만들때 사용 */
const arr = [ 3, 88, 76, 9, 34, 65 ];

//const oddArr = arr.filter(item => item % 2);
const oddArr = arr.filter( (item) => {
    return item % 2 === 1;
} );
// arr앞에 =이 있어서 리턴 메소드이다. ( return 뒤에 식이 붙어서 return메소드인건 아님 )
console.log(oddArr);
console.log(arr);