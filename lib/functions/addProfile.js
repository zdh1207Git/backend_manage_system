module.exports = Profile => (req, res) => {
  const fields = require('./profileFields')(req);
  new Profile(fields)
    .save()
    .then(profile => {
    res.json(profile);
  })
  .catch(err => json(err))
}