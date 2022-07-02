#!/usr/bin/env node
const commander = require('commander')
const { resolve } = require('path')

const commandList = [
  {
    name: 'create',
    argument: '<name>',
    alias: 'c',
    actions: require(resolve(__dirname, './src/create.js'))
  }
]

const program = new commander.Command()



commandList.forEach(cmd => {
  program.command(cmd.name).argument(cmd.argument).action(cmd.actions)
})

program.command('create').argument('<name>').alias('c').action()

program.parse(process.argv)
