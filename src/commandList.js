
const create = require('./create.js')

module.exports = [
  {
    name: 'create',
    argument: '<name>',
    alias: 'c',
    actions: create
  }
]
