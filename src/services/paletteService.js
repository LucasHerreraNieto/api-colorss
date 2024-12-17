const Palette = require('../public/palette')

async function returnPalettes(amount) {
    
    const palettes = []
    
    for(let i = 0; i < amount; i++) {
        const palette = new Palette()
        palettes.push(palette)
    }

    return palettes
}

async function returnPaletteEmpty() {
    const palette = new Palette([])
    return palette
}


async function completePalette(colors) {
    const newPalette = new Palette(colors)
    return newPalette
}

async function generatePalettesBySearchColors(color, amount) {
    const palettes = []

    for(let i = 0; i < amount; i++) {
        const palette = new Palette(color)
        palettes.push(palette)
    }
}

async function modifyPalette(palette, color,i) {
    
    palette.modifyColor(color)
}

async function modifyPaletteName(req) {
    const {palette,name} = req
    palette.changeName(name)
}

async function paletteSearch(category,color,amount) {
    const palettes = []
    for(let i = 0; i < amount; i++) {
        const palette = new Palette(category,color)
        palettes.push(palette)
    }
    return palettes
}

module.exports = {
    returnPalettes,
    returnPaletteEmpty,
    completePalette,
    generatePalettesBySearchColors,
    modifyPalette,
    modifyPaletteName,
    paletteSearch
}