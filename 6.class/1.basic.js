// 클래스
// 객체를 생성할 수 있는 템플릿 (청사진, 틀)
// 객체지향 프로그래밍 : 서로 밀접하게 연관이 있는 것들을 객체로 구성해 나가면서 객체끼리 서로 호환이 가능하도록 할 수 있는 것을 객체지향 프로그래밍이라 한다.
// 클래스를 이용해서 만들어진 객체를 해당 클래스의 인스턴스라고 부른다.

// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (최신 방법)

class Fruit {
  // 생성자: 객체를 만드는데 필요한 데이터를 받아오는 역할, new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 메서드
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');

// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = {
  name: 'pji',
};
