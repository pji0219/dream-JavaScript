const obj = {
  name: 'pji',
  age: 34,
};

// 코딩하는 시점에, 정적으로 접근이 확정 됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법을 사용!
function getValue(obj, key) {
  return obj[key]; // 마침표 표기법으로 하면 key라는 이름의 키가 있어야만 접근이 가능하므로 대괄호 표기법으로 해줘야함
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'front-end developer');

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'age');
