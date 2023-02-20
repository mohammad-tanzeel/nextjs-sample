
require('dotenv').config();
const useDb = require('./helpers/useDb');

async function main() {
const db = await useDb;
  const app = require('./app');
  app.listen(3002);
  return true;     
}

main().then(()=> 
    console.log('server is running at 3002')).catch(err => {
        console.error(err);
        process.exit(1);
    })
