module.exports = Profiles => (req, res) => {
  Profiles.findOne({_id: req.params.id})
    .then(profile => {
      if(!profile) return res.status(404).json('No profile found')
      res.json(profile) 
    })
    .catch(err => res.status(404).json(err));
}