const _mongo = require("./_mongo");
const MONGO_URL = 'mongodb://localhost/'
console.log(process.env.MONGO_URL);
const mongodbOptions = {
    user: '',
    pass: '',
    dbName: 'nextdb'  };

module.exports = _mongo(MONGO_URL, mongodbOptions)