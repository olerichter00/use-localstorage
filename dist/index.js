
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-localstorage.cjs.production.min.js')
} else {
  module.exports = require('./use-localstorage.cjs.development.js')
}
