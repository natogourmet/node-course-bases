const fs = require('fs');
const colors = require('colors');


const createFile = async (base = 5, list) => {
  console.log('==========================='.green);
  console.log('Multiplication Table of '.green, colors.blue( base ));
  console.log('==========================='.green);

  let fileName = `./output/table-${base}.txt`;
  let output = '';

  try {
    for (let index = 1; index <= 10; index++) {
      output += `${base} * ${index} = ${base * index}\n`;
    }
    fs.writeFileSync(fileName, output);

    if (list) {
      console.log(output);
    }

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
