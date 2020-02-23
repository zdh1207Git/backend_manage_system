module.exports = Profiles => (req, res) => {
  Profiles.findOneAndRemove({_id: req.params.id})
    .then(profile => {
        profile.save().then( res.json( {profile, success: true} ) )
    })  
    .catch(err => res.status(404).json('删除失败'));
}