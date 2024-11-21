const express = require('express')

const router = express.Router()
const userController = require('../controllers/register-controller')
const createTestRecordController = require('../controllers/register-controller')
const searchProvinceController = require('../controllers/register-controller')
const searchDistrictController = require('../controllers/register-controller')
const searchSubDistrictController = require('../controllers/register-controller')
const searchUniversityController = require('../controllers/register-controller')
const searchEducationController = require('../controllers/register-controller')
const getMeController = require('../controllers/register-controller')
const checkPhoneNumberController = require('../controllers/register-controller')

router.post('/register' ,userController.register)
router.post('/createTestRecord',createTestRecordController.createTestRecord)
router.get('/searchProvince',searchProvinceController.searchProvince )
router.get('/searchDistrict', searchDistrictController.searchDistrict)
router.get('/searchSubDistrict', searchSubDistrictController.searchSubDistrict)
router.get('/searchUniversity', searchUniversityController.searchUniversity)
router.get('/searchEducation', searchEducationController.searchEducation)
router.post('/getMe', getMeController.getMe)
router.post('/checkPhoneNumber', checkPhoneNumberController.checkPhoneNumber)


module.exports = router