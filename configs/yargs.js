const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base of multiplication table',

  })
  .option('l', {
    type: 'boolean',
    alias: 'list',
    default: false,
    describe: 'Show multiplication table in console',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'Base must be a number';
    }
    return true;
  })
  .argv;

module.exports = argv;