const fs = require('fs');

function validateInput(inputPath, count) {
  if (!inputPath) throw new Error('duplicate-contents command requires inputPath.');
  if (!count || typeof count !== 'number') throw new Error('duplicate-contents command requires count(type number).');
}

function duplicateContents(inputPath, count) {
  count = parseInt(count);
  validateInput(inputPath, count);

  let content = fs.readFileSync(inputPath);
  let duplicatedContents = content;
  for (let i = 0; i < count; i++) {
    duplicatedContents += content;
  }
  fs.writeFileSync(inputPath, duplicatedContents);
}

module.exports = duplicateContents;
