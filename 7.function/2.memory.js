function add(a, b) {
  return a + b;
}

// add와 sum은 같은 함수의 주소 값을 가리키고(참조) 있기 때문에 동일하다.
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
