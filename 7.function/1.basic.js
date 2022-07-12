// 사용 예제1
function add(num1, num2) {
  return num1 + num2;
}

const result = add(1, 2);

console.log(result);

// 사용 예제2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 🖐`;
}

let lastName = '박';
let firstName = '종익';

console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '종익';

console.log(fullName(firstName2, lastName2));
