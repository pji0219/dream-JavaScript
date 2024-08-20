// 구조분해할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits = ['🍏', '🍑', '🍅', '🍋'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(y);
console.log(x);
console.log(z);
