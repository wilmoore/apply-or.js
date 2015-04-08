'use strict'

/**
 * exports.
 */

var array = require('to-array.js')

/**
 * exports.
 */

module.exports = apply

/**
 * Invoke .apply if value is a function, otherwise, return default value.
 *
 * @param  {Function|*} fn
 * Function to be invoked.
 *
 * @param  {Array} [args]
 * Arguments to apply to function.
 *
 * @param  {*} def
 * Default value to return if `fn` is not a function.
 *
 * @param  {*} self
 * `this` value.
 *
 * @return {*}
 * Result of applying function or default value.
 */

function apply (fn, args, def, self) {
  return (typeof fn === 'function')
    ? fn.apply(self, array(args))
    : def
}
