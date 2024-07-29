function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  // return Promise.resolve('🌳 => 🐔');
}

getChicken() //
  .catch((error) => {
    console.log(error.name);
    return '🐔'; // 에러가 났을 때 기본 치킨을 가져오기 위하여 catch를 맨 위에 뒀음
  })
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));
