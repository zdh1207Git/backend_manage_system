const router = require('express').Router();
const handlers = require("../../lib/handlers");
const passportAuthenticate = require('../../config/constants').passportAuthenticate;
const Profiles = require('../../models/Profile');

router.get('/', passportAuthenticate, handlers.getProfiles(Profiles));
router.get('/:id', passportAuthenticate, handlers.getProfile(Profiles));
router.post('/add', passportAuthenticate, handlers.addProfile(Profiles));
router.post('/edit/:id', passportAuthenticate, handlers.editProfile(Profiles));
router.delete('/delete/:id', passportAuthenticate, handlers.deleteProfile(Profiles));

module.exports = router;