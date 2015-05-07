var apply = require('../')
var assert = require('assert')

function divmax (divisor) {
  return Math.max.apply(null, this.val) / divisor
}

var data = {
  val: [9, 7, 15, 12]
}

assert.equal(apply(divmax, 5, data), 3)
