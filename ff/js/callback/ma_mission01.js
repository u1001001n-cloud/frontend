/* ma_mission01.js  */
const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    'length': 6,
    'forEach': function(fn) {
        for(let i=0; i<this.length; i++) {
            fn( this[i] , i );
        }
    }
}
//-------------------------------------------
const fn = (item, idx) => {
    console.log(`arr2[${idx}]: ${item}`);
};

//함수의 주소값을 알면 >> 함수를 호출할 수 있다.

myArr.forEach(fn);

/*
for(let i=0; i<this.length; i++) {
            console.log(`arr[${i}]:` , this[i] );
*/