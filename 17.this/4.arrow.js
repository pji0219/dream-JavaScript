// 자바스크립트의 함수는 만능
// 함수처럼 사용, 생성자 함수로 사용
// 하지만 이걸 위해서 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
  name: 'Dog',

  // 💩
  play: function () {
    console.log('논다멍');
  },
};

dog.play();
// 생성자 함수처럼 객체를 만들 수도 있음
// 위의 dog객체에서 그냥 함수 표현식으로 선언하면 생성자 함수로도 사용가능 하기에 함수 내부에 더 무거운 프로토타입을 가지게 때문에 안 좋다.
const obj = new dog.play();
console.log(obj);

// ES6
const cat = {
  name: 'cat',

  // 객체의 메서드(객체에 속한 함수)
  play() {
    console.log('논다냥');
  },
};

cat.play();

// 생성자 함수로 사용 불가
// const obj2 = new cat.play();

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 새성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 않음)
 * 3. 일반 함수에서는 인자에 대한 모든 정보를 가지고 있는 arguments 객체를 참조할 수 있으나 화살표 함수에는 없음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 * - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // 화살표 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow(); // 정적으로 이미 결정 되었기 때문에 다른 곳에서 호출되어도 this가 바뀌지 않음
