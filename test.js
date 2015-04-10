'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var apply = require('./')

/*!
 * tests.
 */

test('apply(func)', function (t) {
  t.plan(1)

  var five = (function constant (val) {
    return function () { return val }
  })(5)

  t.equal(apply(five), 5)
})

test('apply(func, args)', function (t) {
  t.plan(1)
  t.equal(apply(Math.max, [20, 30, 15]), 30)
})

test('apply(func, args, self)', function (t) {
  t.plan(1)

  function divmax (divisor) {
    return Math.max.apply(null, this.val) / divisor
  }

  var data = {
    val: [9, 7, 15, 12]
  }

  t.equal(apply(divmax, 5, data), 3)
})
