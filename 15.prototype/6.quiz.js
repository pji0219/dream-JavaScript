// 프로토타입을 베이스로 한 객체지향 프로그래밍 -> 클래스로 변환
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }

  printName() {
    console.log(`${this.name} ${this.emoji} ${this.owner}`);
  }

  play() {
    console.log('같이 놀자 댕댕아!');
  }
}

class Tiger extends Animal {
  // constructor 생략 시 암묵적으로 아래와 같이 부모의 constructor 상속
  /*  constructor(arg) {
    super(arg)
  } */
  hunt() {
    console.log('사냥하자');
  }
}

const dog1 = new Dog('멍멍', '🐶', 'pji');
dog1.play();
dog1.printName();

const tiger1 = new Tiger('어흥', '🐯');
tiger1.hunt();
tiger1.printName();
