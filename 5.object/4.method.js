const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: ๐`); // ๊ฐ์ฒด ์์์ ์์ ์ ์์ฑ์ ์ ๊ทผํ๋ ค๋ฉด this๋ฅผ ์จ์ค์ผํจ
  },
};

apple.display();
