const Color = require("./colors.js")

class Palette{

    colors

    constructor(){
        this.colors = this.generateColors()
    }

    constructor(colors){
        this.colors = colors
    }

    generateColors(){
        let listColors = []
        for(let i=0;i < 5;i++ ){
            listColors.push(new Color())
        }
        return listColors
    }

    getColorsName(){
        return this.colors.map((color)=> color.color())
    }

}

module.exports = Palette