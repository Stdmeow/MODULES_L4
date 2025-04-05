const bcrypt = require('bcrypt');

async function hashPasswords(passwords) {
  const startTime = Date.now();
  const hashedPasswords = await Promise.all(
    passwords.map(async password => {
      const hash = await bcrypt.hash(password, 10);
      return { password, hash, time: Date.now() - startTime };
    })
  );
  return hashedPasswords;
}

module.exports = hashPasswords;
