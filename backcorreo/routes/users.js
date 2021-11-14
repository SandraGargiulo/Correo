var express = require('express');
var router = express.Router();
var controller = require('../controllers/authcontroller');
/* GET users listing. */
router.get('/', controller.list);
router.post('/signin', controller.signin);
router.post('/signup', controller.signup);
router.get('/private', controller.isAuth);
router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" });
});
module.exports = router;
