const inquirer = require('inquirer')
const ora = require('ora')
const download = require('download-git-repo')

const prompt = [
  {
    type: 'rawlist',
    name: 'template',
    message: '请选择项目模板',
    choices: ['vue3-vite-template', 'pkg-template']
  }
]

function load(dirName, template) {
  const spinner = ora(`Downloadinging  ${template}`).start();
  download(`direct:git@github.com:adjfks/${template}.git`, dirName, { clone: true }, (err) => {
    spinner.stop();
    // if (err) return console.log(`下载失败，请稍后重试`)
    console.log(`${template} download successfully\n cd ${dirName}\n pnpm install\n pnpm run dev`);
  });
}

module.exports = (name) => {
  inquirer
    .prompt(prompt)
    .then((answers) => {
      const template = answers.template
      load(name, template)
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
