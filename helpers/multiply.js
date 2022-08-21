const fs = require('fs');

const createFile = async (base = 5) => {
  console.log('=====================');
  console.log('Multiplication Table of ', base);
  console.log('=====================');

  let fileName = `table-${base}.txt`;
  let output = '';

  try {
    for (let index = 1; index <= 10; index++) {
      output += `${base} * ${index} = ${base * index}\n`;
    }
    fs.writeFileSync(fileName, output);

    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
