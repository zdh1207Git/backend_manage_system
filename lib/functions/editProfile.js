module.exports = Profile => (req, res) => {
  const fields = require('./profileFields')(req);
  Profile.findOneAndUpdate(
    {_id: req.params.id},
    {$set: fields},
    {new: true}
  )
  .then(profile => {
    res.json(profile);
  })
  .catch(err => json(err))
}