function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기, 총 4초 걸림
getBanana() //
  .then((banana) => {
    return getApple() //
      .then((apple) => [banana, apple]);
  })
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행, 동시에 시작해서 총 3초 걸림
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log('race', fruits));

Promise.all([getBanana(), getApple(), getOrange()]) //
  // 다 성공해야 되기 때문에 콘솔 로그에 출력 되지 않음
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log); // 에러가 출력

// Promise.allSettled 성공한 것과 실패한 것 모든 정보를 보여줌
Promise.allSettled([getBanana(), getApple()]) //
  .then((fruits) => console.log('all-settled', fruits))
  .catch(console.log);
