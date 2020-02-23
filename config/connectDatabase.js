const mongoose = require('mongoose');
const db = require('./keys').mongoUri;
const connect = () => {
  mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(()=> console.log('Mongodb connected.'))
    .catch((err) => console.log(err));
}
module.exports = connect;