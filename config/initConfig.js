const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig = require('./passportConfig');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  passportConfig(passport);
}