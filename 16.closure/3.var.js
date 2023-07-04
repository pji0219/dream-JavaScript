function loop() {
  const array = [];
  // var와 let의 차이점 : var는 블록 스코프가 없기 때문에 하나의 loop 함수의 스코프만 가지기 때문에 최종적인 5만 출력
  // let은 블록 스코프가 있기에 for 스코프에서 클로저로 0 ~4까지의 i값이 push안의 함수 내부 함수와 묶여서 0 ~ 4 출력
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
