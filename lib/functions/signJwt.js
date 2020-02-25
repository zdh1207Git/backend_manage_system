const jwt = require('jsonwebtoken');
const secret = require('../../config/keys').secret;
const tokenDuration = require('../../config/constants').tokenDuration;

module.exports = (isMatch, rule, res, newUser) => {
  if (isMatch) {
    jwt.sign(rule, secret, {expiresIn: tokenDuration}, (err, token) => {
      if (err) throw err;
      res.json({
        newUser,
        success: true,
        token: "Bearer " + token,
      })
    })
  } else {
    return res.status(400).json({message: '密码错误'})
  }
}