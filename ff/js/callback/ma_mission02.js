/* ma_mission02.js  */
const myArr = {
    '0': 3,
    '1': 88,
    '2': 76,
    '3': 9,
    '4': 34,
    '5': 65,
    '6': 77,
    'length': 7,
    'forEach': function(aaa) {  
        for(let i=0; i<this.length; i++) {
            aaa(this[i], i);
        }
    },
    'filter': function(fn) {
        const temp = []; //true값만 배열에 담아 넣으면 된다.

        for(let i = 0; i<this.length; i++){
            if( fn(this[i], i) ) {
                temp.push( this[i] );
            }
        }

        /*
        const result = fn(this[0], 0);
        console.log('result:', result);
        */
        //작업!!!
        
        return temp;
    }
};

const arr2 = myArr.filter( (item, i) => item <= 70 );
console.log(arr2); // [ 3, 9, 34, 65 ]

//필터도 함수고 파라미터도 함수
//item을 filter( (item, i) => item <= 70 ); 이렇게도 작성할 수 있고
//filter( item => item <= 70 ); 이렇게도 작성할 수 있다.
//자바 스크립트에서만 가능. 자바는 불가능.