/*
1️⃣ 두 수 합 & 짝수/홀수 확인

설명: 두 수를 입력받아 합을 구하고, 짝수면 "짝수", 홀수면 "홀수" 출력

함수 이름: sumCheck

힌트: % 연산자 사용
*/

/*
function sumCheck(a, b) {
  if(sumCheck % 2 === 0){
    console.log("sumCheck:", "짝수" : "홀수");
  }
}

sumCheck(3, 4);
sumCheck(10, 20);
sumCheck(7,7);

이렇게 쓴 이유 :
if문이 있어야 조건으로 불린 비교 연산을 함. %를 써서 나머지가 0이 맞으면 짝수, 아니면 홀수임.
===를 써서 문자열 0아닌 숫자열 0만 0이라고 인정하게 함.
출력에는 짝수 아니면 홀수를 :으로 비교하려고 했는데 이부분이 헷갈리긴 함. 괄호로 쌀지 말지 고민이 컸음.

질문1. 조건식 자체를 삼항 연산자로 쓰는게 좋았을지, 또는 else를 써서 짝수 아니면 홀수를 출력하게 만드는 편이 좋았을지 헷갈림.
질문2. 함수는 같은 행동을 쉽게 반복해서 작동할 수 있게 해주는 역할이라고 들었음. 그럼 왜 for문 말고 함수를 써야함? 걔는 반복 아님? 얘는 동작을 반복한다는 점이 중요한거?
질문3. true/false를 반대로 쓰면 결과도 반대로 출력된다고 알고 있음. 위치가 많이 중요한거임? 그럼 컴퓨터는 진짜 짝수인지 홀수인지 판단 안하고 왼쪽이면 짝수라고 하고 오른쪽이면 홀수라고 함?

1번 먼저 풀었는데 채점하고 있어주면 2번 풀고 있다가 볼게

----------------------------
[정답]

---올바른 에시---

function sumCheck(a, b) {
  let sum = a + b;
  if (sum % 2 === 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}

sumCheck(3, 4);   // 홀수
sumCheck(10, 20); // 짝수
sumCheck(7, 7);   // 짝수

-------

삼항연산자 버전:

function sumCheck(a, b) {
  let sum = a + b;
  console.log(sum % 2 === 0 ? "짝수" : "홀수");
}

[새로 알게된 점]
:는 삼항연산자에서만 쓰고 삼항연산자 안쓰면 무조건 else if, else 써야한다고 함. 코드 짧을때 간단히 사용 가능.
if else는 여러 줄 코드나 복잡한 동작에 더 직관적.
이번 문제는 짧은 출력/단순 동작이라서 삼항 연산자가 어울렸음.

*/


/*
2️⃣ 배열 합 & 조건 출력

설명: 숫자 배열을 받아 합을 계산

합 >= 50 → "많다"

합 < 50 → "적다"

함수 이름: arraySumCheck
*/
/*
function arraySumCheck(arr) {
  for(let line = 0; line<arr.length; line++){
    let sum = 0;
      sum += line;
        if(sum >= 50){
          console.log("많다");
            else{
              console.log("적다");
            }
        }
  }
}

arraySumCheck(10, 20, 30);
arraySumCheck(5, 5, 5);
arraySumCheck(50, 0);

왜 이렇게 썼냐:
일단 for문으로 배열의 숫자를 꺼내는게 중요하다고 생각했어.
근데 여기서부터 막혔어. arr에서 꺼낸 수를 갑자기 다 더하래서 대입 연산자를 넣긴 했어..
arr.length는 자리값을 가져오는 건데, arr의 숫자 꺼내는 법이 기억이 안났어.
그래서 if문을 썼는데 왜 이렇게 됐는지 나도 잘 몰라.


질문1. 내가 아는 arr는 let arr = [10, 20, 30]; 이렇게 생긴게 정석인데 진짜 이렇게 함수호출해도 되는건가..
질문2. arr면 무조건 for문이라고 배웠거든? 맞아?
질문3. 함수문에서 출력을 따로 안넣을때도 있던데. 이 문제에선 예외인지 알고 싶어.
질문4. 컴퓨터가 코드를 위에서 아래로 읽는다며? 그럼 if문 위에 console.log가 있어도 돼?
질문5. arr는 너무 헷갈려. 컴퓨터가 자리를 0부터 세는거, 다 상관없어. arr안의 요소를 어떻게 합치는지 모르겠어.

*/

/*
3️⃣ 문자열 뒤집기 & 대문자 변환

설명: 문자열을 받아

뒤집기

모두 대문자로 변환

함수 이름: reverseUpper
*/

/*
function reverseUpper(str) {
}

reverseUpper("hello");
reverseUpper("javascript");

이렇게 쓴 이유:
마찬가지로 적을수 없어...

질문1. 나 아직 이런거 배운 기억이 없음...
질문2. 뒤집는 것도 신기한데 대문자로 바꾸는 건 무슨 동작임? 이거 html인지 css인지 거기에는 있었던거 같기도함
질문3. str는 문자열이고 이거 void함수로 호출해야하는 거면 대체 str를 어떻게 호출해야 하지? 호출부터 어려워서 막혔음.. 뭐가 더 붙으면 얘는 리턴 함수가 되잖아?
*/

/*

[정답]

function reverseUpper(str) {
  // 1️⃣ 문자열을 배열로 바꾸고 뒤집기
  let reversed = str.split("").reverse().join("");
  // 2️⃣ 대문자로 변환
  let uppercased = reversed.toUpperCase();
  // 3️⃣ 출력
  console.log(uppercased);
}

reverseUpper("hello");      // OLLEH
reverseUpper("javascript"); // TPIRCSEVAJ

*/

/*
4️⃣ 최대값 찾기

설명: 숫자 3개를 입력받아 가장 큰 수를 반환

함수 이름: maxOfThree
*/
/*
function maxOfThree(a, b, c) {
  let i=0;
  for(let k=0; k<arr.length; k++){
    if(i<k){
      k =- maxOfThree;
    }
  }
  console.log(k);
}

maxOfThree(5, 2, 9);
maxOfThree(1, 1, 1);
maxOfThree(0, 10, -5);

풀이:
사실 난 이거 완전 망했다고 느껴. 그래서 질문만 적을게. 내 질문들이 이런 코드를 작성하게 한 주범이거든..

질문1: 대체 가장 큰 수를 반환하는건 조건문인지, 반복문인지도 모르곘어. 완전 감 잃었어.
질문2: a, b, c를 서로 비교하게 만들었어도 괜찮았을 거 같긴해. if문으로 말이야. 근데 이게 array인지도 모를만큼 매개변수? 이게 많아서... 진짜 헷갈려.
질문3: 출력을 넣는 위치는 그냥 이 지점에서 보여준다는 도장을 찍는거나 다름없다고 들었거든? 근데 이거 위에서 아래 순서대로 가는거잖아. 그럼 if에서 끝나는거면 if에 출력을 넣어야할지, if밖으로 꺼내서 출력해야할지.. 도무지 모르겠다. 중괄호 속 중괄호가 어려워. 모든 중괄호가 새로운 세상이면 어디에서 출력을 넣어야 제대로 내가 원하는 값을 볼 수 있는지가 헷갈려.
*/

/*

[정답]

방법1: if-else 비교

function maxOfThree(a, b, c) {
  let max = a; // 우선 a를 최대값으로 가정

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  console.log(max);
}

maxOfThree(5, 2, 9);   // 9
maxOfThree(1, 1, 1);   // 1
maxOfThree(0, 10, -5); // 10

-----------
방법2: 삼항 연산자

function maxOfThree(a, b, c) {
  let max = a > b ? a : b;
  max = max > c ? max : c;
  console.log(max);
}

방법3: 배열과 Math.max 사용
function maxOfThree(a, b, c) {
  console.log(Math.max(a, b, c));
}

-----------------

3️⃣ 질문 답변
질문1: 조건문 vs 반복문

숫자 3개 → **조건문(if)**만으로 충분

반복문(for)은 배열이나 많은 숫자들을 처리할 때 필요

질문2: a, b, c 매개변수

맞아요, 서로 비교해서 최대값 찾으면 됨

3개라면 굳이 배열 필요 없음 → a, b, c로 충분

질문3: 출력 위치

컴퓨터는 위에서 아래로 읽음

최종 결과를 보고 싶으면 비교 다 끝난 뒤 출력

즉, console.log(max)는 if 밖, 함수 끝에 두면 됨

if 안에 넣으면 조건 맞을 때만 출력, 조건 틀리면 안 나옴

💡 핵심:

중괄호 {} → 코드 블록 범위를 정함

출력 위치 = 결과가 확실히 계산된 후 → if 밖

-------------------------

4️⃣ 정리
문제	반복문 필요?	방법
3개의 숫자 최대값	❌	if문, 삼항 연산자, Math.max
n개의 숫자 최대값	✅	for문 + 배열 + 비교
*/