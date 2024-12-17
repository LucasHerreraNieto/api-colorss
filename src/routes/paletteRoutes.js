const paletteControllers = require('../controllers/paletteControllers')
const router = require('express').Router()
const middleware = require('../middlewares/Middlewares')


router.get('/palettes',middleware.verifyToken, paletteControllers.returnPalettes)

router.get('/paletteEmpty',middleware.verifyToken, paletteControllers.returnPaletteEmpty)

router.get('/paletteSearch',middleware.verifyToken,paletteControllers.searchPalette)

router.put('/modifyPalette',middleware.verifyToken, paletteControllers.modifyPalette)

router.post('/paletteCreated',middleware.verifyToken, paletteControllers.colorPalette)


module.exports = router