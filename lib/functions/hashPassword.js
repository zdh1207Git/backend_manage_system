const bcrypt = require('bcrypt');
const saltRounds = require('../../config/constants').saltRounds;

module.exports = (newUser) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser.save()
               .catch(err => console.log(err)); 
      });
    });
} 