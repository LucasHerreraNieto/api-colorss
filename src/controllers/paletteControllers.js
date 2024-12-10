const paletteService = require('../services/paletteService')


exports.returnPalettes = async (req, res) =>{
    try{
        const palettes = await paletteService.returnPalettes(req.body.amount)
        res.json(palettes)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.returnPaletteEmpty = async (req, res) =>{
    try{
        const palette = await paletteService.returnPaletteEmpty()
        res.json(palette)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.colorPalette = async (req, res) =>{
    try{
        const palette = await paletteService.completePalette(req.body)
        res.json(palette)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.generatePaletteBySearchColors = async (req, res) =>{
    try{
        const palettes = await paletteService.generatePalettesBySearchColors(req.body)
        res.json(palettes)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.modifyPalette = async (req, res) =>{
    try{
        const palette = await paletteService.modifyPalette(req.body)
        res.json(palette)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}