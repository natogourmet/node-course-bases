const { createFile } = require('./helpers/multiply');
const argv = require('./configs/yargs');

console.clear();

console.log(argv);


const base = 5;
createFile(base, argv.l)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.log(err));
