'use strict';

module.exports = function (str, len, ch) {
  // convert `str` to `string`
    str = str + '';
  // `len` is the `pad`'s length now
    len = len - str.length;
  // doesn't need to pad
  if (len <= 0) return str;
  // `ch` defaults to `' '`
  if (!ch && ch !== 0) ch = ' ';
  // convert `ch` to `string` because it can be a number
  ch = ch + '';

  while (len--) {
    str = ch + str;
  }
  return str;
}