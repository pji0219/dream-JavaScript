// 프로토타입을 베이스로 한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super
  Animal.call(this, name, emoji);
  this.owner = owner;
}
// 상속을 하기 위해 Object.create(Animal.prototype);로 애니멀의 프로토타입을 베이스로한 새로운 베이스 프로토타입 오브젝트를 만들고
// Dog 프로토타입에 연결, 한마디로 Dog의 프로토타입을 오브젝트가 아닌 애니멀로 변경
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log('같이 놀자 댕댕아!');
};

const dog1 = new Dog('멍멍', '🐶', 'pji');
dog1.play();
dog1.printName();

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);

Tiger.prototype.hunt = () => {
  console.log('사냥하자!');
};

const tiger1 = new Tiger('어흥', '🐯');
tiger1.hunt();
tiger1.printName();
