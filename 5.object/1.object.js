// 객체 만드는 방법
// 1. Object literal(오브젝트 리터럴) : { key: value }
// 2. new Object(); : Object라는 클래스를 이용
// 3. Object.create(); : 오브젝트 클래스 안에 있는 create함수를 이용

// key - 문자, 숫자, 문자열, 심볼 쓸 수 있음
// value - 원시값, 객체(함수도 가능) 쓸 수 있음
let apple = {
  name: 'apple',
  'hello-bye': '🖐',
  0: 1,
  ['hello-bye1']: '🖐',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);

// 속성 삭제
delete apple.emoji;
console.log(apple);
