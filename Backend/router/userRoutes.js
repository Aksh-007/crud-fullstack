const express = require('express');
const { Home, createUser, getUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', Home);
router.post('/createUser', createUser);
router.get('/getUsers', getUser)

module.exports = router;