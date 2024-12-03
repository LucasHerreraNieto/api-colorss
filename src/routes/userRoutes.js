const userController = require('../controllers/userControllers')
const router = require('express').Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/save', userController.savePalette)

module.exports = router
