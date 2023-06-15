/* 
  자바스크립트에서 모든 객체들은 객체라면 공통적으로 가지고 있는 속성들 (즉 함수들)을 묶어 놓은
  object라는 이름을 가진 프로토타입을 가지고 있다.(단 하나의 프로토타입을 모든 객체가 상속 받음)
  왜냐하면 모든 이러한 공통적인 함수들을 프로토타입에 만들어 놓음으로써 손쉽게 객체간에 상속을 하기 위해서

  배열은 array라는 프로토타입을 상속 받고 있는데 결국 배열도 객체이기 때문에 array는 object 프로토타입을 상속 받는다.

  객체간 상속의 연결 고리는 프로토타입 체인으로 연결 되어 있음

  외부에서 직접 접근은 불가
  보통은 아래 세가지 방식으로 접근 가능
  __proto__
  Object.getPrototypeOf() : 프로토타입 조회
  Object.setPrototypeOf():  프로토타입 설정

  예외적으로 생성자 함수에서는 prototype으로 접근 가능 
*/

const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // name은 열거 안됨
console.log(Object.entries(dog)); // name은 열거 안됨
delete dog.name; // 삭제 불가
console.log(dog.name);
