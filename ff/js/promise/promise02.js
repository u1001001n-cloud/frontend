/* promise02.js

함수와 함께 콜백지옥에 빠지는 코드

함수와 함께 콜백지옥을 해결하는 promise 코드
*/

const increaseAndPrint = (n, cb) => { //iAP  || n에 1이 들어감(2)
  setTimeout( () => { //sT 호출  || (0 + 1)
    const increased = n + 1; // 1 + 1 = 2가 됨(3)
    console.log('increased:', increased);
    if(cb) { //cb에 무엇이 들어왔는지 확인 --> true || n의 값이 없어져서 false(4)
      cb(increased);
    }
  }, 1000 );
}

increaseAndPrint(0, n1 => { //iAP 호출 || n에 1이 들어감(1)
  increaseAndPrint(n1, n2 => {
    increaseAndPrint(n2);
  }); //주소값
});
//1, 2만 출력하게 됨(n이 하나일때는. n1, n2가 생기면 3까지 출력됨)

console.log('-------------------');

const increaseAndPrintPromise = (n) => {
  return new Promise( resolve => {
    setTimeout( () => {
      const increased = n + 1;
      console.log('increased:', increased);
      resolve(increased);
    }, 1000 )
  } );
}

increaseAndPrintPromise(10)  //promise의 객체 주소값 리턴
.then(item => increaseAndPrintPromise(item));