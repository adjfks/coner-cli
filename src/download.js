const ora = require('ora')
const download = require('download-git-repo')

module.exports = function (dirName, template) {
  const spinner = ora(`Downloadinging  ${template}`).start();
  download(`direct:git@github.com:adjfks/${template}.git`, dirName, { clone: true }, (err) => {
    spinner.stop();
    // if (err) return console.log(`下载失败，请稍后重试`)
    console.log(`${template} download successfully\n cd ${dirName}\n pnpm install\n pnpm run dev`);
  });
}
