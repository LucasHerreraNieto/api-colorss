const userController = require('../controllers/userControllers')
const router = require('express').Router()
const middleware = require('../middlewares/Middlewares.js')

router.post('/register', userController.register)

router.post('/login', userController.login)

router.post('/logout',middleware.verifyToken,userController.logout)

router.post('/save',middleware.verifyToken, userController.savePalette)

router.delete('/delete',middleware.verifyToken, userController.deleteUser)

router.put('/:user/modify/name',middleware.verifyToken, userController.modifyUserName)

router.put('/:user/modify/email',middleware.verifyToken, userController.modifyUserEmail)

router.put('/:user/modify/password',middleware.verifyToken, userController.modifyUserPassword)

router.get('/:user/palettes',middleware.verifyToken, userController.getPalettes)

router.get('/:user/:palette',middleware.verifyToken, userController.getPalette)

router.delete('/:user/:palette/delete',middleware.verifyToken,userController.deletePalette)

router.put('/:user/:palette/modifyName',middleware.verifyToken, userController.modifyPaletteName)

router.post('/:user/sendRecoveryEmail', userController.sendRecoveryEmail)

module.exports = router
