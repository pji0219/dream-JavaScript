// 함수가 중첩되어 있을 때 내부 함수가 외부 함수의 렉시컬 환경에 접근할 수 있으니까 외부환경에 접근이 가능한 것?
const text = 'hello';

function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  inner();
}
outer();
