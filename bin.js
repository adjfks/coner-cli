const Command = require('commander').Command

const commandList = require('./lib/commandList.js')


const program = new Command()

commandList.forEach(cmd => {
  program.command(cmd.name).argument(cmd.argument).action(cmd.actions)
})

program.command('create').argument('<name>').alias('c').action()

program.parse(process.argv)
