const express = require('express')

const router = express.Router()
const userController = require('../controllers/register-controller')
const createTestRecordController = require('../controllers/register-controller')
router.post('/register' ,userController.register)
router.post('/createTestRecord',createTestRecordController.createTestRecord)

module.exports = router