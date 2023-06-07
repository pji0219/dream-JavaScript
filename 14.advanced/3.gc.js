/* 
  자바스크립트에서 가비지 컬렉터가 동작하는 원리는 객체를 아무곳에서도 참조하지 않고 있으면 
  가비지 컬렉터가 자동으로 메모리에서 해당 객체를 청소를 해준다.

  자바스크립트 엔진에서 자체적으로 제공(자바스크립트 엔진 백그라운드 프로세스)
*/

// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨!
// 이름 충돌도 나타날 수도 있고 메모리에 계속 유지되기 때문에 가급적 필요한 곳에서 변수를 선언하는 것이 좋음
const global = 1;
{
  // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸됨(가비지 컬렉터에 의해서)
  const global = 1;
}

function print() {
  // 함수 내부에서도 블럭 안에서 필요한 경우에는
  // 필요한 곳에서 변수를 선언하고 사용해야 함
  if (true) {
    let temp = 0;
  }
}