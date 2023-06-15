{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  // console.log(y); // 접근 불가
}

// 변수의 이름이 같을 때 가장 가까운 상위 스코프를 우선해서 참조한다.
const text = 'global';
{
  const text = 'inside block1';
  {
    console.log(text); // 'inside block1'
  }
}
