// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

// 내 풀이
const set = new Set(fruits);

const fruits2 = [];
set.forEach((item) => fruits2.push(item));
console.log(fruits2);

// 다른 사람 풀이
console.log([...new Set(fruits)]);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// 내 풀이
const arr = [];

set1.forEach((item1) => {
  set2.forEach((item2) => {
    if (item1 === item2) {
      arr.push(item1);
    }
  });
});

const set3 = new Set(arr);
console.log(set3);

// 다른 사람 풀이
const set0 = [...set1].filter((item) => set2.has(item));
const set4 = new Set(set0);
console.log(set4);
