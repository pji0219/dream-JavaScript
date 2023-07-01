// 클로져 쓰는 이유
// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보 은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0; // 은닉하고자 하는 데이터 감춤

  // 오직 퍼블릭 함수를 통해서만 내부 데이터를 조작
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 최신 자바스크립트에서는 클래스를 쓰면 됨
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
