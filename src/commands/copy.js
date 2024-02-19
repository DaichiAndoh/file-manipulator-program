const fs = require('fs');

function validateInput(inputPath, outputPath) {
  if (!inputPath) throw new Error('copy command requires inputPath.');
  if (!outputPath) throw new Error('copy command requires outputPath.');
}

function copy(inputPath, outputPath) {
  validateInput(inputPath, outputPath);

  let content = fs.readFileSync(inputPath);
  fs.writeFileSync(outputPath, content);
}

module.exports = copy;
