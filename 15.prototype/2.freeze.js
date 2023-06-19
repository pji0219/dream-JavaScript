// 동결: Object.freeze() 수정, 추가, 삭제, 쓰기, 속성 재정의 불가
// (단, 얕은 꽁공 얼림!)
const youngHee = { name: '영희' };
const dog = { name: '멍멍이', emoji: '🐶', owner: youngHee };

Object.freeze(dog);
dog.name = '댕댕이'; // 동결된 객체 수정 불가
console.log(dog);
dog.age = 4; // 추가 불가
console.log(dog);
delete dog.name; // 삭제 불가
console.log(dog);
youngHee.name = '영희얌'; // 얕은 동결이기 때문에 중첩된 객체의 속성은 수정 가능
console.log(dog);

// 밀봉: Object.seal() 수정 가능, 추가, 삭제, 속성 재정의 불가
const cat = {};
Object.assign(cat, dog); // ...와 동일
console.log(cat);
Object.seal(cat); // 밀봉
console.log(cat);
cat.name = '야옹이'; // 수정 가능
console.log(cat);
delete cat.emoji; // 삭제 불가
console.log(cat);

// 동결 됬는지 확인
console.log(Object.isFrozen(dog));

// 밀봉 됬는지 확인
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가만 불가
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응'; // 가능
console.log(tiger);
delete tiger.name; // 가능
console.log(tiger);
tiger.age = '1'; // 추가 불가
console.log(tiger);
