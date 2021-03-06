# apply-or
> Invoke .apply if value is a function, otherwise, return default value.

[![Build Status](http://img.shields.io/travis/wilmoore/apply-or.js.svg)](https://travis-ci.org/wilmoore/apply-or.js) [![Code Climate](https://codeclimate.com/github/wilmoore/apply-or.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/apply-or.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install apply-or --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/apply-or.svg)](https://www.npmjs.org/package/apply-or) [![NPM downloads](http://img.shields.io/npm/dm/apply-or.svg)](https://www.npmjs.org/package/apply-or) [![Dependency Status](https://gemnasium.com/wilmoore/apply-or.js.svg)](https://gemnasium.com/wilmoore/apply-or.js)

## Why?

`Function.prototype.apply` is normally sufficient; however, there are situations where it is useful to treat a value as a `Function` (invoke it) only if it is indeed a `Function`; otherwise, return it as-is. Calling `.apply` on a value that is not a function would cause an error.

## Examples

###### [delay.js](examples/delay.js)

```js
var apply = require('apply-or')

function delay (cb) {
  setTimeout(apply.bind(null, cb))
}

delay('Hello') // does nothing (because argument is not a function)
delay(console.log.bind(console, 'Hello, World')) // prints 'Hello, World' to stdout
```

###### [divmax.js](examples/divmax.js)

```js
var apply = require('apply-or')

function divmax (divisor) {
  return Math.max.apply(null, this.val) / divisor
}

var data = {
  val: [9, 7, 15, 12]
}

apply(divmax, 5, data)
//=> divmax.apply({ val: [9, 7, 15, 12] }, [5])
//=> 15 / 5
//=> 3
```

## API

### `apply(func, args, self)`

###### arguments

 * `func: (Function)` Function to be invoked.
 * `args: (Array|*)` Arguments to apply to function.
 * `self: (Object)` `this` value.

###### returns

 * `(*)` Result of applying function or default value.

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/apply-or.js.svg)](https://github.com/wilmoore/apply-or.js/blob/master/license)
