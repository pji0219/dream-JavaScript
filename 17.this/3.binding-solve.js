// 정적으로 바인딩 시키는 솔루션
function Cat(name) {
  this.name = name;

  // 2. 화살표 함수 사용: 화살표 함수는 렉시컬 환경에서의 this를 기억함
  // 화살표 함수 외부의 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
    console.log(this);
  };
  // 1.bind 함수를 이용해서 수동적(명시적)으로 바인딩 해주기
  // 인스턴스 생성 시 자기 자신을 this로 계속 바인딩
  // this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다멍: ${this.name}`);
  };
}

const cat = new Cat('야옹이');
const dog = new Dog('댕댕이');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고 전달된 콜백을 실행!');
  printName();
}

printOnMonitor(cat.printName);
