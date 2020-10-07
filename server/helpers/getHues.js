//outputs array of 5 hues. Index 2 is the original color
const hexStringArr = require('../Data/colorData');

function getHues(hexStr) {
  const output = [];
  const index = hexStringArr.indexOf(hexStr);
  // if the hexStr is not a color in the database, return without hues
  if (index === -1) {
    output.push(hexStr);
    return output;
  }

  // hues only from right of hexStr in data arr
  if (index < 20) {
    for (let i = index; i <= index + 40; i += 10) {
      output.push(hexStringArr[i]);
    }
  }

  // hues only from left of hexStr in data arr
  else if (index > 339) {
    for (let i = index; i >= index - 40; i -= 10) {
      output.push(hexStringArr[i]);
    }
  } else {
    for (let i = index - 20; i <= index + 20; i += 10) {
      output.push(hexStringArr[i]);
    }
  }

  return output;
}

module.exports = getHues;