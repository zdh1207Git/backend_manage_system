// const Profiles = require('../../models/Profile');
module.exports = Profiles => (req, res) => {
  Profiles.find()
    .then(profile => {
      if(profile.length == 0) return res.status(404).json('No profile found')
      res.json(profile) 
    })
    .catch(err => res.status(404).json(err));
}