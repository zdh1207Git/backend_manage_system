const router = require('express').Router();
const handlers = require("../../lib/handlers");
const passportAuthenticate = require('../../config/constants').passportAuthenticate;

router.get('/test', (req, res) => {res.send('Test')});
router.get('/current', passportAuthenticate, handlers.passport);
router.post('/login', handlers.login);
router.post('/register', handlers.register);

module.exports = router;