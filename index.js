/**
 * cdiff
 * calculate color diff with CIEDE2000
 */

/**
 * @typedef {{space:'rgb'|'hsl'|'hwb'|'xyz'|'lab'|'lch'|'luv', values:number[]}} ParsedColor
 */

const process = require('process');
/** @type {(color:string) => ParsedColor} */
const parse = require('color-parse');
const converter = require('@csstools/convert-colors');

/**
 * @param {ParsedColor} parsed
 * @returns {[number, number, number]}
 */
const normalizeColor = (parsed) => {
  const [v0, v1, v2] = parsed.values;
  switch (parsed.space) {
    case 'rgb': return converter.rgb2lab(v0, v1, v2);
    case 'hsl': return converter.hsl2lab(v0, v1, v2);
    case 'hwb': return converter.hwb2lab(v0, v1, v2);
    case 'xyz': return converter.xyz2lab(v0, v1, v2);
    case 'lab': return [v0, v1, v2];
    case 'lch': return converter.lch2lab(v0, v1, v2);
    default: throw new Error('Not supported');
  }
}

const main = () => {
  const [,, color1, color2] = process.argv;
  if (!(color1 && color2)) {
    console.log('Usage: cdiff $COLOR1 $COLOR2');
    process.exit();
  }
  const normalizedColor1 = normalizeColor(parse(color1));
  const normalizedColor2 = normalizeColor(parse(color2));
  console.log('CIEDE2000:', converter.lab2ciede(normalizedColor1, normalizedColor2));
};

main();
