const hexStringArr = ["ff0000", "ff0400", "ff0800", "ff0d00", "ff1100", "ff1500", "ff1900", "ff1e00", "ff2200", "ff2600", "ff2a00", "ff2f00", "ff3300", "ff3700", "ff3c00", "ff4000", "ff4400", "ff4800", "ff4d00", "ff5100", "ff5500", "ff5900", "ff5e00", "ff6200", "ff6600", "ff6a00", "ff6f00", "ff7300", "ff7700", "ff7b00", "ff8000", "ff8400", "ff8800", "ff8c00", "ff9100", "ff9500", "ff9900", "ff9d00", "ffa200", "ffa600", "ffaa00", "ffae00", "ffb300", "ffb700", "ffbb00", "ffbf00", "ffc400", "ffc800", "ffcc00", "ffd000", "ffd500", "ffd900", "ffdd00", "ffe100", "ffe600", "ffea00", "ffee00", "fff200", "fff700", "fffb00", "ffff00", "fbff00", "f6ff00", "f2ff00", "eeff00", "eaff00", "e5ff00", "e1ff00", "ddff00", "d9ff00", "d4ff00", "d0ff00", "ccff00", "c8ff00", "c3ff00", "bfff00", "bbff00", "b7ff00", "b3ff00", "aeff00", "aaff00", "a6ff00", "a2ff00", "9dff00", "99ff00", "95ff00", "91ff00", "8cff00", "88ff00", "84ff00", "80ff00", "7bff00", "77ff00", "73ff00", "6fff00", "6aff00", "66ff00", "62ff00", "5eff00", "59ff00", "55ff00", "51ff00", "4dff00", "48ff00", "44ff00", "40ff00", "3cff00", "37ff00", "33ff00", "2fff00", "2bff00", "26ff00", "22ff00", "1eff00", "1aff00", "15ff00", "11ff00", "0dff00", "09ff00", "04ff00", "00ff00", "00ff04", "00ff08", "00ff0d", "00ff11", "00ff15", "00ff1a", "00ff1e", "00ff22", "00ff26", "00ff2a", "00ff2f", "00ff33", "00ff37", "00ff3c", "00ff40", "00ff44", "00ff48", "00ff4c", "00ff51", "00ff55", "00ff59", "00ff5e", "00ff62", "00ff66", "00ff6a", "00ff6e", "00ff73", "00ff77", "00ff7b", "00ff80", "00ff84", "00ff88", "00ff8c", "00ff91", "00ff95", "00ff99", "00ff9d", "00ffa2", "00ffa6", "00ffaa", "00ffae", "00ffb3", "00ffb7", "00ffbb", "00ffbf", "00ffc3", "00ffc8", "00ffcc", "00ffd0", "00ffd5", "00ffd9", "00ffdd", "00ffe1", "00ffe5", "00ffea", "00ffee", "00fff2", "00fff7", "00fffb", "00ffff", "00fbff", "00f7ff", "00f2ff", "00eeff", "00eaff", "00e5ff", "00e1ff", "00ddff", "00d9ff", "00d5ff", "00d0ff", "00ccff", "00c8ff", "00c3ff", "00bfff", "00bbff", "00b7ff", "00b3ff", "00aeff", "00aaff", "00a6ff", "00a2ff", "009dff", "0099ff", "0095ff", "0091ff", "008cff", "0088ff", "0084ff", "0080ff", "007bff", "0077ff", "0073ff", "006eff", "006aff", "0066ff", "0062ff", "005eff", "0059ff", "0055ff", "0051ff", "004cff", "0048ff", "0044ff", "0040ff", "003cff", "0037ff", "0033ff", "002fff", "002aff", "0026ff", "0022ff", "001eff", "001aff", "0015ff", "0011ff", "000dff", "0008ff", "0004ff", "0000ff", "0400ff", "0800ff", "0d00ff", "1100ff", "1500ff", "1900ff", "1e00ff", "2200ff", "2600ff", "2b00ff", "2f00ff", "3300ff", "3700ff", "3c00ff", "4000ff", "4400ff", "4800ff", "4c00ff", "5100ff", "5500ff", "5900ff", "5d00ff", "6200ff", "6600ff", "6a00ff", "6f00ff", "7300ff", "7700ff", "7b00ff", "8000ff", "8400ff", "8800ff", "8c00ff", "9000ff", "9500ff", "9900ff", "9d00ff", "a200ff", "a600ff", "aa00ff", "ae00ff", "b300ff", "b700ff", "bb00ff", "bf00ff", "c300ff", "c800ff", "cc00ff", "d000ff", "d400ff", "d900ff", "dd00ff", "e100ff", "e600ff", "ea00ff", "ee00ff", "f200ff", "f700ff", "fb00ff", "ff00ff", "ff00fb", "ff00f7", "ff00f2", "ff00ee", "ff00ea", "ff00e6", "ff00e1", "ff00dd", "ff00d9", "ff00d4", "ff00d0", "ff00cc", "ff00c8", "ff00c3", "ff00bf", "ff00bb", "ff00b7", "ff00b3", "ff00ae", "ff00aa", "ff00a6", "ff00a2", "ff009d", "ff0099", "ff0095", "ff0090", "ff008c", "ff0088", "ff0084", "ff0080", "ff007b", "ff0077", "ff0073", "ff006f", "ff006a", "ff0066", "ff0062", "ff005d", "ff0059", "ff0055", "ff0051", "ff004c", "ff0048", "ff0044", "ff0040", "ff003c", "ff0037", "ff0033", "ff002f", "ff002b", "ff0026", "ff0022", "ff001e", "ff0019", "ff0015", "ff0011", "ff000d", "ff0008", "ff0004"];

module.exports = hexStringArr;

/* 
360 Hex Color codes (seperated by 1 degree of hue)

Data Generated from the following function:

let fs = require('fs');

//convert HSL to RGB to Hex. Output String
function HSLToHex(h,s,l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function dataArr() {
  const res = [];
  const s = 100;
  const l = 50;
  for (let h = 0; h <= 360; h++) {
    const out = HSLToHex(h, s, l);
    res.push(out);
  }
  return res;
}

const data = dataArr();
fs.writeFile("./colorData.js", JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("output saved");
    }
});

*/