const commander = require('commander')
const { resolve } = require('path')

const commandList = require(resolve(__dirname, './lib/commandList.js'))
const program = new commander.Command()



commandList.forEach(cmd => {
  program.command(cmd.name).argument(cmd.argument).action(cmd.actions)
})

program.command('create').argument('<name>').alias('c').action()

program.parse(process.argv)
