const fs = require('fs');

function validateInput(inputPath, outputPath) {
  if (!inputPath) throw new Error('reverse command requires inputPath.');
  if (!outputPath) throw new Error('reverse command requires outputPath.');
}

function reverseString(s){
  if (s === '') return '';
  return s[s.length - 1] + reverseString(s.slice(0, -1));
}

function reverse(inputPath, outputPath) {
  validateInput(inputPath, outputPath);

  let content = fs.readFileSync(inputPath);
  fs.writeFileSync(outputPath, reverseString(content.toString()));
}

module.exports = reverse;
