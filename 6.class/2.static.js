// static 정적 프로퍼티, 메서드
// 클래스 레벨의 프로퍼티와 메서드
// : static 키워드를 써주면 인스턴스에 메서드가 들어가있지 않고 클래스에 한번만 정의하고 재사용할 수 있다.
// 전달될 데이터에 따라 인스턴스에 들어갈 데이터가 변경 되어야 하지 않는 공통적으로 사용되어야 할 프로퍼티나 메서드에 사용

class Fruit {
  // 프로퍼티에도 static을 붙여줄 수 있다.
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 : 생성될 인스턴스와 관련 없는 것을 재사용하기 위해서 사용
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 필요한 데이터가 채워져 있지 않은 템플릿이기 때문에 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// 인스턴스에 들어가 있지 않고 클래스에 있기 때문에 이렇게 접근
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');

const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
