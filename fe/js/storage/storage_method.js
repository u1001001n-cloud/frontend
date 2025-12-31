const arr = [];

/*미니 미션
arr 배열에 객체 200개를 담는다.
객체는
{
id: 1,
name: '홍길동1'
},
{
id: 2,
name: '홍길동2'
}
즉, id는 순차적으로 증가하면되고 이름은 홍길동{id} 저장이 되면 된다.
*/

for(let i=1; i<=100; i++){
  let obj = {
    id: i,
    name: `홍길동${i}`
  };
  arr.push(obj); // .push() 애용하기
}
console.log(arr);

//find 이용하지 않고 id값이 20인 객체의 주소값을 찾아주세요.

let result = null;

for(let k = 0; k<arr.length; k++){
  if(arr[k].id === 20){
    result = arr[k];
  }
}

console.log(result);