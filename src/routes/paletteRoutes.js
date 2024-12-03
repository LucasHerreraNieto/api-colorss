const paletteControllers = require('../controllers/paletteControllers')
const router = require('express').Router()


router.get('/palettes', paletteControllers.returnPalettes)

module.exports = router