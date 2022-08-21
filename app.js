const fs = require('fs');

console.clear();
console.log('=====================');
console.log('Hello World!');
console.log('=====================');

const base = 5;
let output = '';

for (let index = 1; index <= 10; index++) {
  output += `${base} * ${index} = ${base * index}\n`;
}

fs.writeFile( 'output.txt', output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});