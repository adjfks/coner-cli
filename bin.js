import { Command } from 'commander'
const program = new Command();

program.command('create [template]').action((template) => {
  console.log(template);
})

program.parse(process.argv);
