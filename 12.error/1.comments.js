// 주석
// 코드상에서 꼭 필요한 경우가 아니라면 웬만하면 주석은 쓰지 않는게 좋다.
// TODO(pji): 해야할 일을 작성
// TODO(pji): xx기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음(단, 정말 필요한 경우에만)
 * (왜 이렇게 만들었는지, 왜 이런 아키텍트를 선택했는지, 어떻게 함수, 모듈을 사용해야하는지)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
