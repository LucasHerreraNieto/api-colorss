const userController = require('../controllers/userControllers')
const router = require('express').Router()

router.post('/register', userController.register)

router.post('/login', userController.login)

router.post('/logout', userController.logout)

router.post('/save', userController.savePalette)

router.post('/delete', userController.deleteUser)

router.post('/:user/modify/name', userController.modifyUserName)

router.post('/:user/modify/email', userController.modifyUserEmail)

router.post('/:user/modify/password', userController.modifyUserPassword)

router.get('/:user/palettes', userController.getPalettes)

router.get('/:user/:palette', userController.getPalette)

router.post('/:user/:palette/delete',userController.deletePalette)

router.post('/:user/:palette/modifyName', userController.modifyPaletteName)

module.exports = router
