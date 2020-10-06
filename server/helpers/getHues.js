//outputs array of 5 hues. Index 2 is the original color
const hexStringArr = require('../Data/colorData');

function getHues(hexStr) {
  const output = [hexStr];
  const index = hexStringArr.indexOf(hexStr);

  // if the hexStr is not a color in the database, return without hues
  if (index === -1) {
    return output;
  }

  // hues only from right of hexStr in data arr
  if (index < 2) {
    for (let i = index; i < index + 4; i++) {
      output.push(hexStringArr[i]);
    }
  }

  // hues only from left of hexStr in data arr
  else if (index > 357) {
    for (let i = index; i > index - 4; i--) {
      output.push(hexStringArr[i]);
    }
  } else {
    for (let i = index - 2; i <= index + 2; i++) {
      output.push(hexStringArr[i]);
    }
  }

  return output;
}

module.exports = getHues;