function random() {
  const max = 3;
  // const randomIndex = Math.random();
  // const randomIndex = Math.random() * max;
  const randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
}

const basilChef = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function randomItem(array) {
  const randomIndex = random();
  return array[randomIndex];
}

function makeBasil() {
  return `<h2>${randomItem(basilChef)}'s ${randomItem(
    basilTexture
  )} basil</h2>`;
}

console.log(makeBasil());
