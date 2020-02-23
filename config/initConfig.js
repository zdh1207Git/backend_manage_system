const bodyParser = require('body-parser');

module.exports = (passportInitialize, app) => {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(passportInitialize);
}