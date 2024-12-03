const paletteService = require('../services/paletteSevice')


exports.returnPalettes = async (req, res) =>{
    try{
        const palettes = await paletteService.returnPalettes(req.user)
        res.json(palettes)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}


