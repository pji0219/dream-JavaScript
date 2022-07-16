/** 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자 구분함
 * 추천: camelCase (likeThis)
 * 한국어 X (영어로 쓰는 것이 표준)
 * 예약어 X
 * 숫자로 시작 X
 * 특수문자 X (_, $두가지는 제외)
 * 이모지 X
 * 여러개의 변수를 1, 2, 3 숫자로 구분 X
 * 결론: 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple;

// 나쁜 예제
let number = 20;

// 좋은 예제
let myAge = 20;

// 나쁜 예제
let audio1;
let audio2;

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁
// audio를 치면 관련된게 자동완성으로 다 나옴
let audioBackground;
let audioWind;
