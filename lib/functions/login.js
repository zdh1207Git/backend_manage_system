const User = require('../../models/users')
const bcrypt = require('bcrypt');
const signJwt = require('./signJwt'); 

module.exports = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({message: 'user not found.'});
      };
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        const rule = {
          id: user.id, 
          name: user.name,
          avatar: user.avatar,
          identity: user.identity
        };
        signJwt(isMatch, rule, res)
      })  
    })
}