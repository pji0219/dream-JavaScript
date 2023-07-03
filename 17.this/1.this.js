/*
  글로벌 컨텍스트의 this
  - 브라우저: window
  -  노드: 모듈
*/
const x = 0;
module.exports.x = x;
console.log(this); // export된 x
console.log(globalThis); // globalThis객체 안에는 setTimeout 등이 들어 있음
// globalThis.setTimeout(); // globalThis 생략해도 됨
// setTimeout();
console.clear();

/*
  함수 내부에서의 this
  엄격모드에서는 undefined
  느슨한 모드에서는 globalThis
*/
function fun() {
  console.log(this); // globalThis가 출력 됨
}
fun();

/*
  생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
*/
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('난 나옹이다옹');
const cat2 = new Cat('야옹이');

cat1.printName();
cat2.printName();
