// const multiple = {
//   [Symbol.iterator]() {
//     let num = 0;
//     const max = 10;

//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// yield : 사용자가 원할 때 까지 기다렸다가 리턴해줌
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();

let next = multiple.next();
console.log(next.value, next.done);

// return을 하게 되면 제네레이터가 끝남
// multiple.return();

// 에러를 던짐
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
