const inquirer = require('inquirer')
const download = require('./download.js')
const prompt = [
  {
    type: 'rawlist',
    name: 'template',
    message: '请选择项目模板',
    choices: ['vue3-vite-template', 'pkg-template']
  }
]

export default (name) => {
  inquirer
    .prompt(prompt)
    .then((answers) => {
      const template = answers.template
      download(name, template)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('当前环境不支持该CLI');
      } else {
        // Something else went wrong
        console.log(`发生错误，请重试！`);
      }
    });
}
