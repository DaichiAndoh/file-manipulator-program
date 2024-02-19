const fs = require('fs');

function validateInput(inputPath, needle, newString) {
  if (!inputPath) throw new Error('replace-string command requires inputPath.');
  if (!needle) throw new Error('replace-string command requires needle.');
  if (!newString) throw new Error('replace-string command requires newString.');
}

function replaceString(inputPath, needle, newString) {
  validateInput(inputPath, needle, newString);

  let content = fs.readFileSync(inputPath);
  const replacedContent = content.toString().replace(new RegExp(needle, 'g'), newString);
  fs.writeFileSync(inputPath, replacedContent);
}

module.exports = replaceString;
