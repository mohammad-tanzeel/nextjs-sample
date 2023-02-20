const { default: mongoose } = require("mongoose");
const db = mongoose.connection;

function connect(MONGO_URL, mongodbOptions = {}) {
    console.log('mongo connecting...');
  
    mongoose
      .connect(MONGO_URL, mongodbOptions)
      .catch((err) => console.error('Mongo error.....', err.toString(), err.code));
  }

  module.exports = (MONGO_URL, mongodbOptions) => 
  
  new Promise((resolve, reject) =>{
    if(!db.readyState) connect(MONGO_URL, mongodbOptions)
    //for successful connection
    db.once('open', () => resolve(db));
    //for error in connection
    db.on('error', (err) => {
      if (!['ECONNREFUSED'].includes(err.code)) retry = 0;
      else {
        retry = --retry;
        setTimeout(connect, 3000);
      }
      if (!retry) return reject(err.toString());
    });
  })