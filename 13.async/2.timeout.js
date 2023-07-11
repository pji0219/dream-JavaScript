/*
  자바스크립트 언어(엔진) 자체는 동기적으로 동작 되나, 자바스크립트 런타임 환경에서 제공해주는
  API들은 비동기적으로 실행되기 때문에 이러한 API의 도움을 받아서 다양한 일들을 동시다발적으로 처리할 수 있다.

  콜백함수를 태스크 큐에 담아 놨다가 그것을 이벤트 루프가 감시하고 있다가 콜스택이 비워져 있으면 시기 적절하게 콜스택에 담겨져서 실행 됨
 */
function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
execute();