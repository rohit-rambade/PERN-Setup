const { createUser } = require('../controllers/user.controller')


const router = require("express").Router();


router.post('/api/test', createUser);


module.exports = router;