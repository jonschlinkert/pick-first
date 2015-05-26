/*!
 * pick-first <https://github.com/jonschlinkert/pick-first>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isPlainObject = require('is-plain-object');
var get = require('get-value');

module.exports = function pickFirst(o, prop, paths) {
  if (!isPlainObject(o)) {
    throw new TypeError('pick-first expects an object.');
  }

  var m = get(o, prop);
  if (m) return m;
  paths = paths || [];

  var len = paths.length, i = 0;
  while (len--) {
    var key = paths[i++] + '.' + prop;
    var val = get(o, key);
    if (val) return val;
  }
  return null;
};
