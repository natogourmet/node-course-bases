const { createFile } = require('./helpers/multiply');
const argv = require('./configs/yargs');
require('colors');

console.clear();

console.log(argv);


const base = 5;
createFile(base, argv.l)
  .then((fileName) => console.log(fileName.rainbow, 'created'))
  .catch((err) => console.log(err));
