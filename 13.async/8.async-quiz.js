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

async function makeFriedEgg1() {
  const chicken = await getChicken().catch(() => '🐔');
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);

  console.log(friedEgg);
}

makeFriedEgg1();

async function makeFriedEgg2() {
  let chicken;

  try {
    await getChicken();
  } catch {
    chicken = '🐔';
  }

  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg2().then(console.log);
