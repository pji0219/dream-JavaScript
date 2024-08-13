// spread 연산자, 전개구문
// 모든 Iterable은 spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const num = [1, 2, 3];
console.log(add(...num));
