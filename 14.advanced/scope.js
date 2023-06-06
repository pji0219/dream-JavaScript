/* 
  변수를 참조할 수 있는(접근할 수 있는) 유효한 범위
  또는 식별자(변수, 함수, 클래스 이름)가 유효한 범위
  선언된 위치에 따라 유효 범위가 결정 됨

  스코프가 존재하는 이유
  이름 충돌 방지, 메모리 절약(블록 안에 있는 변수는 블록이 끝나는 순간 제거 되어서)
*/

// 코드 블럭: { }, 조건문, 반복문, 함수 등
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = 'a';
  console.log(a); // a
}
// console.log(a); // 접근 불가
const c = 'c';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = 'hello world!';
  console.log(message);
}

// console.log(message) // 접근 불가

// 함수 외부에서는 함수 내부의 매개변수를 참조할 수 없다.
function sum(a, b) {
  console.log(a, b);
}

// console.log(a, b); // 접근 불가
