User = require('../../models/users')
bcrypt = require('bcrypt');
jwt = require('jsonwebtoken');
keys = require('../../config/keys')

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
        if (isMatch) {
          const rule = {
            id: user.id, 
            name: user.name,
            avatar: user.avatar,
            identity: user.identity
          }
          jwt.sign(rule, keys.secret, {expiresIn: keys.tokenDuration}, (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: "Bearer " + token,
            })
          })
        } else {
          return res.status(400).json({message: '密码错误'})
        }
      })  
    })
}