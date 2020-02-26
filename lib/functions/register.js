const User = require('../../models/users');
const hashPassword = require('./hashPassword');
const avatar = require('../../config/constants').myGmailGravatar;
const signJwt = require('./signJwt');

module.exports = (req, res) => {
  User.findOne({email: req.body.email})
      .then((user) => {
        if (user) {
          return res.json({email: `邮箱${req.body.email}已经注册过了`})
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            avatar,
            password: req.body.password,
            identity: req.body.identity,
          });
          hashPassword(newUser);
          const rule = {
            id: newUser.id, 
            name: newUser.name,
            avatar: newUser.avatar,
            identity: newUser.identity
          };
          signJwt(true, rule, res, newUser);
        }
      })
}