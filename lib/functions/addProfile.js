const Profile = require('../../models/Profile');

module.exports = (req, res) => {
  new Profile({
    type: req.body.type || '',
    describe: req.body.describe || '',
    income: req.body.income || '',
    expend: req.body.expend || '',
    cash: req.body.cash || '',
    remark: req.body.remark || '',
  })
  .save()
  .then(profile => {
    res.json(profile);
  })
  .catch(err => json(err))
}