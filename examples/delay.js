var apply = require('../')

function delay (cb) {
  setTimeout(apply.bind(null, cb))
}

delay('Hello') // does nothing (because argument is not a function)
delay(console.log.bind(console, 'Hello, World')) // prints 'Hello, World' to stdout
