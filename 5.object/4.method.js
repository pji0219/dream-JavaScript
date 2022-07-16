const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체 안에서 자신의 속성에 접근하려면 this를 써줘야함
  },
};

apple.display();
