function a() {
  // 자바스크립트 엔진은 기본적으로 동기적으로 수행되기 때문에 순차적으로 앞의 함수가 다 끝날 때까지 기다렸다가 뒤의 함수가 실행 됨
  // 그래서 함수 내부에서 무거운 작업을 하면 오래 걸릴 수가 있다.
  for (let i = 0; i < 10000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log('시작했드아!');
console.log(result);
