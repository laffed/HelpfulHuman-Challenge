const hexStringArr = require('./colorData');
const copy = [...hexStringArr];
const randomize = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ranHexStringArr = randomize(copy);

module.exports = ranHexStringArr;