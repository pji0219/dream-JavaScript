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

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const pji = { name: 'pji', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(pji);
