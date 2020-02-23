const users = require('./api/users');
const profiles = require('./api/profiles');

module.exports = app => {
  app.use('/api/users', users);
  app.use('/api/profiles', profiles);
}
