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

test('apply(fn, args)', function (t) {
  t.plan(1)
  t.equal(apply(Math.max, [20, 30, 15]), 30)
})

test('apply(fn, args, def)', function (t) {
  t.plan(1)

  function max () {
    return Math.max.apply(null, this.val)
  }

  var data = {
    val: [3, 2, 1]
  }

  t.equal(apply(max, null, null, data), 3)

})

test('apply(fn, args, def, self)', function (t) {
  t.plan(1)

  var obj = {
    max: function () {
      return Math.max.apply(null, this.val)
    },
    val: [3, 2, 1]
  }

  t.equal(apply(obj.max, null, null, obj), 3)
})
