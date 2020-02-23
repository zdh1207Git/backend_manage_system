const router = require('express').Router();
const handlers = require("../../lib/handlers");
const passportAuthenticate = require('../../config/constants').passportAuthenticate;
const Profiles = require('../../models/Profile');

router.get('/', passportAuthenticate, handlers.getProfiles(Profiles));
router.get('/:id', passportAuthenticate, handlers.getProfile(Profiles));
router.post('/add', passportAuthenticate, handlers.addProfile);

module.exports = router;