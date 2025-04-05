const bcryptHelper = require('./libs/bcryptHelper');
const loadData = require('./modules/dataLoader');
const stringSorter = require('./modules/stringSorter');
const { createFileStructure, writeToFile } = require('./modules/fileSystem');

async function main() {
  const passwords = ['password1', 'password2', 'password3', 'password4', 'password5', 'password6', 'password7', 'password8', 'password9', 'password10', 'password11', 'password12', 'password13'];
  const hashedPasswords = await bcryptHelper(passwords);
  hashedPasswords.forEach(item => {
    console.log(`Password: ${item.password} Hash: ${item.hash} Time: ${item.time}ms`);
  });

  const data = await loadData('https://jsonplaceholder.typicode.com/users');
  const sortedNames = data.data.map(user => stringSorter(user.name));
  console.log('Sorted Names:', sortedNames);

  createFileStructure();
  const names = data.data.map(user => user.name).join('\n');
  const emails = data.data.map(user => user.email).join('\n');
  
  writeToFile(path.join(__dirname, 'users', 'names.txt'), names);
  writeToFile(path.join(__dirname, 'users', 'emails.txt'), emails);
}

main();
