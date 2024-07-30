// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 0, 2, 6...., 9
// [Symbol.iterator](): Iterator{ next(): {value, done} };

const multiple = {
  [Symbol.iterator]() {
    let num = 0;
    const max = 10;

    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
