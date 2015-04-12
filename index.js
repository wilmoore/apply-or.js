'use strict'

/**
 * imports.
 */

var array = require('to-array.js')

/**
 * exports.
 */

module.exports = apply

/**
 * Invoke .apply if value is a function, otherwise, return default value.
 *
 * @param  {Function|*} func
 * Function to be invoked.
 *
 * @param  {Array|*} [args]
 * Arguments to apply to function.
 *
 * @param  {*} [self]
 * `this` value.
 *
 * @return {*}
 * Result of applying function or default value.
 */

function apply (func, args, self) {
  return (typeof func === 'function')
    ? func.apply(self, array(args))
    : func
}
