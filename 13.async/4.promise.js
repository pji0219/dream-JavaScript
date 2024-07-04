function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('second가 0보다 작음'));
    }

    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch((error) => console.error(error))
  .finally(() => console.log('끝났다!'));
