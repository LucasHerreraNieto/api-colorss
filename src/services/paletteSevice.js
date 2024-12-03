const Palette = require('../public/palette')

async function returnPalettes(amount) {
    
    const palettes = []
    
    for(let i = 0; i < amount; i++) {
        const palette = new Palette()
        palettes.push(palette)
    }

    return palettes
}

exports.module = {
    returnPalettes
}