const express = require('express')

const router = express.Router()
const userController = require('../controllers/register-controller')

router.post('/register' ,userController.register)


module.exports = router