# apply-or

[![Code Climate](https://codeclimate.com/github/wilmoore/apply-or.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/apply-or.js) [![Build Status](http://img.shields.io/travis/wilmoore/apply-or.js.svg)](https://travis-ci.org/wilmoore/apply-or.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard) [![NPM version](http://img.shields.io/npm/v/apply-or.svg)](https://www.npmjs.org/package/apply-or) [![NPM downloads](http://img.shields.io/npm/dm/apply-or.svg)](https://www.npmjs.org/package/apply-or) [![LICENSE](http://img.shields.io/npm/l/apply-or.svg)](license)

> Invoke .apply if value is a function, otherwise, return default value.

    $ npm install apply-or --save

## Example

    var apply = require('apply-or');

    function max () {
      return Math.max.apply(null, this.val)
    }

    var data = {
      val: [3, 2, 1]
    }

    apply(max, null, null, data)
    //=> 3

## License

  [MIT](license)

