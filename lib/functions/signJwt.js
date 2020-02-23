const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

module.exports = (isMatch, rule, res, newUser) => {
  if (isMatch) {
    jwt.sign(rule, keys.secret, {expiresIn: keys.tokenDuration}, (err, token) => {
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