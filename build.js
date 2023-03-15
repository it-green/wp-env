const readline = require('readline');
const fs = require('fs-extra');

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.remove('dist', err =>{ if (err) throw err; });

readInterface.question('enter theme dir name: ', inputString => {
  fs.copySync('theme', `dist/${inputString}`);
  fs.remove(`dist/${inputString}/js`, err =>{ if (err) throw err; });
  fs.remove(`dist/${inputString}/scss`, err =>{ if (err) throw err; });
  readInterface.close();
});