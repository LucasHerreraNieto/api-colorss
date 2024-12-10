const paletteControllers = require('../controllers/paletteControllers')
const router = require('express').Router()


router.get('/palettes', paletteControllers.returnPalettes)

router.get('/paletteEmpty', paletteControllers.returnPaletteEmpty)

router.get('/paletteSearch',paletteControllers.generatePaletteBySearchColors)

router.post('/modifyPalette', paletteControllers.modifyPalette)

router.post('/paletteCreated', paletteControllers.colorPalette)

module.exports = router