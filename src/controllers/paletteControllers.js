const paletteService = require('../services/paletteService')


exports.returnPalettes = async (req, res) =>{
    try{
        const palettes = await paletteService.returnPalettes(req.body.amount)
        res.json(palettes)
        res.status(200)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.returnPaletteEmpty = async (req, res) =>{
    try{
        const palette = await paletteService.returnPaletteEmpty()
        res.json(palette)
        res.status(200)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.colorPalette = async (req, res) =>{
    try{
        const palette = await paletteService.completePalette(req.body.colors)
        res.json(palette)
        res.status(200)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}


exports.modifyPalette = async (req, res) =>{
    try{
        const palette = await paletteService.modifyPalette(req.body)
        res.json(palette)
        res.status(200)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.searchPalette = async (req, res) =>{
    try{
        const palettes = await paletteService.paletteSearch(req.params.category,req.body.color,req.body.amount)
        res.json(palettes)
        res.status(200)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}