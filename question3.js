/**
 * Question #3:
 *  Write a function that converts HEX to RGB. Then Make that function
 * autodetect the formats so that if you enter HEX color format it returns RGB
 * and if you enter RGB color format it returns HEX.
 * Bonus: Release this tool as a npm package.
 */

const toggleHexRgb = color => {
  if (typeof color !== 'string') return undefined;

  // helper method, sanitizes hex values
  const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  // helper method to convert rgb to hex
  const rgbToHex = (r, g, b) => `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

  // check if our input is a HEX pattern string
  if (color.match(/^[#]([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})\;?$|^([\d]{6}\;?)$/gmi)) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/gi.exec(color);
    if (result !== undefined && result.length >= 1) {
      return `rgb (${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
    }
  } else if (color.match(/^rgb\s?\(([0-9]{1}[0-9]?[0-9]?)(,\s?)([0-9]{1}[0-9]?[0-9]?)(,\s?)([0-9]{1}[0-9]?[0-9]?)\)\;?$/gm)) {
    const result = /^rgb\s?\(([0-9]{1}[0-9]?[0-9]?),?\s?([0-9]{1}[0-9]?[0-9]?),?\s?([0-9]{1}[0-9]?[0-9]?)\)\;?$/gi.exec(color);
    if (result !== undefined && result.length >= 1) {
      // check that none of our rgb values are greater then 255, if so make it equal 255
      for (let i = 1; i <= 4; i++) {
        if (result[i] > 255) result[i] = 255;
      };
      return rgbToHex(parseInt(result[1]), parseInt(result[2]), parseInt(result[3])).toUpperCase();
    }
  }

  // if the string is neither HEX nor RGB, return undefined
  return undefined;
};

