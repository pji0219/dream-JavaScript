/*
  This 바인딩
  자바, C#, C++ 등 대부분의 객체지향 프로그래밍 언어에서는 this는 항상 자신의 인스턴스 자체를 가리킴! (한번 결정되면 영원히 안바뀜)
  정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
  하지만 자바스크립트에서는 누가 호출하느냐에 따라서 this가 달라짐
  즉 this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
*/
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍: ${this.name}`);
  };
}

const cat = new Cat('야옹이'); // new 키워드를 사용해서 객체를 만드는 순간 this는 만들어진 객체 자기 자신을 가리킴
const dog = new Dog('댕댕이');
cat.printName();
dog.printName();

// 동적으로 this가 바인딩되는 예시들
dog.printName = cat.printName; // dog.printName에 cat.printName을 할당
dog.printName(); // dog에서 호출하였기 때문에 댕댕이가 출력됨 (this가 dog를 가리킴)
cat.printName(); // cat에서 호출하면 야옹이 출력, 즉 누가 호출하느냐에 따라 this가 결정됨!

function printOnMonitor(printName) {
  console.log('모니터를 준비하고 전달된 콜백을 실행!');
  printName(); // 호출하는 사람이 없기 때문에 undefined로 바인딩 됨
}

printOnMonitor(cat.printName);
