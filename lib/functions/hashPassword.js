const bcrypt = require('bcrypt');
const saltRounds = require('../../config/constants').saltRounds;

module.exports = (newUser, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser.save()
               .then(user => res.json(user))
               .catch(err => console.log(err)); 
      });
    });
} 