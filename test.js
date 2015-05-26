/*!
 * pick-first <https://github.com/jonschlinkert/pick-first>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var should = require('should');
var pickFirst = require('./');

describe('pickFirst', function () {
  it('should match properties against the given key:', function () {
    var o = {a: {b: {c: 'd', e: 'f', g: {x: 'one'}}, x: 'two'}, x: 'three'};
    pickFirst(o, 'x').should.equal('three');
    pickFirst(o, 'x').should.equal('three');
    pickFirst(o, 'a.x').should.equal('two');
    pickFirst(o, 'a.b.g.x').should.equal('one');
  });

  it('should return the first property matching a path in the given array:', function () {
    var o = {a: {b: {c: 'd', e: 'f', g: {x: 'one'}}, x: 'two'}};
    pickFirst(o, 'x', ['b.g', 'a']).should.equal('two');
    pickFirst(o, 'x', ['a.b.g', 'a']).should.equal('one');
    pickFirst(o, 'x', ['a', 'a.b.g']).should.equal('two');
    pickFirst(o, 'a.x', ['a.b.g', 'a']).should.equal('two');
  });

  it('should throw an error when an object is not passed:', function () {
    (function () {
      pickFirst();
    }).should.throw('pick-first expects an object.');
  });
});
