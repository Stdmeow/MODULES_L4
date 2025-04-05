const dotenv = require('dotenv');
const mode = process.env.MODE;

dotenv.config({ path: `.env.${mode}` });
console.log(`Current Mode: ${mode}`);
