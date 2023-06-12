'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용 시 기본적으로 엄격 모드임
// 순수 자바스크립트에서는 기본적으로 설정되어 있지 않음
var x = 1;
// delete x; // 엄격모드에서는 delete 키워드 사용 불가

function add(x) {
  var a = 2;
  // b = a + x; // 없는 변수에 할당 불가, var 키워드 생략 불가
  console.log(this);
}
add(1);

const array = [1, 2, 3];
// for문 조건에서 변수 키워드 생략 불가
// for(num of array) {
//   console.log(num)
// }
