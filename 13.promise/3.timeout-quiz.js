// 주어진 seconds가 지나면 콜백함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던짐
function runInDelay(callback, seconds) {
  const sec = seconds * 1000;

  if (!callback) throw new Error('callback을 설정해야합니다.');
  if (!sec || sec < 0) throw new Error('0보다 작은 수로 설정할 수 없습니다.');
  setTimeout(callback, sec);
}

try {
  runInDelay(() => {
    console.log('만세!');
  }, 2);
} catch (error) {
  console.error(error);
}
