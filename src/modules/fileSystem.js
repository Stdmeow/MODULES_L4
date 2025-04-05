const fs = require('fs');
const path = require('path');

function createFileStructure() {
  const usersDir = path.join(__dirname, 'users');
  if (!fs.existsSync(usersDir)) {
    fs.mkdirSync(usersDir);
  }
  fs.writeFileSync(path.join(usersDir, 'names.txt'), '');
  fs.writeFileSync(path.join(usersDir, 'emails.txt'), '');
}

function writeToFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

module.exports = { createFileStructure, writeToFile };
