// 생성자 함수 : 객체를 만들어 주는 함수(붕어빵 틀처럼 템플릿을 만들어 두고 원하는 데이터를 전달해서 찍어낼 수 있음)

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  // return this;
  // 자바스크립트 엔진이 자동으로 만들어주기 때문에 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
