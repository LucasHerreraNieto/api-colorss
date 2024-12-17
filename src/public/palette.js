const Color = require("./colors.js")

class Palette{

    colors
    name = "nameless palette"
    category 

    constructor(category,color){
        this.colors = this.generateNewPalette(category,color)
    }


    generateColors(amount){
        let listColors = []
        for(let i=0;i < amount;i++ ){
            listColors.push(new Color())
        }
        return listColors
    }

    addColor(color){
        if(this.colors.length < 5) {
            this.colors.push(color)
        }else{
            throw Exeption ("The palette is full")
        }
    }
    

    addColors(colors){
        if(this.colors.length + colors.length > 5){
            throw Exeption ("The palette is full")
        }else{
            colors.forEach((color)=>{
                this.colors.push(color)
            })
        }
    }

    getName(){
        return this.name
    }

    modifyColor(color, index){
        this.colors[index] = color
    }

    getColorsName(){
        return this.colors.map((color)=> color.color())
    }

    changeName(name){
        this.name = name
    }  

    generateNewPalette(category,color){
        switch(category){
            case "pastel":
                this.category = "pastel"
                return this.generatePastelPalette()
            case "neon":
                this.category = "neon"
                return this.generateNeonPalette()
            case "earth":
                this.category = "earth"
                return this.generateEarthPalette()
            case "metallic":
                this.category = "metallic"
                return this.generateMetallicPalette()
            case "muted":
                this.category = "muted"
                return this.generateMutedPalette()
            case "monocrhomatic":
                this.category = "monocrhomatic"
                return this.generateMonocrhomaticPalette(color)
            default:
                return this.generateColors(5)
        }
    }

    generatePastelPalette(){
        let colors = []
        for(let i=0;i<5;i++){
            colors.push(new Color('pastel'))
        }
        return colors
    }

    generateNeonPalette(){
        let colors = []
        for(let i=0;i<5;i++){
            colors.push(new Color('neon'))
        }
        return colors
    }

    generateEarthPalette(){
        let colors = []
        for(let i=0;i<5;i++){
            colors.push(new Color('earth'))
        }
        return colors
    }

    generateMetallicPalette(){
        let colors = []
        for(let i=0;i<5;i++){
            colors.push(new Color('metallic'))
        }
        return colors
    }

    generateMutedPalette(){
        let colors = []
        for(let i=0;i<5;i++){
            colors.push(new Color('muted'))
        }
        return colors
    }

    generateMonocrhomaticPalette(color){
        const colors = []; colors.push(color)
        for (let i = 1; i < 5; i++) {
            let factor = 1 - (i / 5)
            const newRed = this.adjustLuminosity(color.getRed(), factor)
            const newGreen = this.adjustLuminosity(color.getGreen(), factor)
            const newBlue = this.adjustLuminosity(color.getBlue(), factor)
            colors.push(new Color('personalized', newRed, newGreen, newBlue)); 
        } 
        return colors;
    }

    adjustLuminosity(colorComponent,factor){
        const newColorComponent = Math.floor(colorComponent * factor)
        return Math.min(Math.max(newColorComponent, 0), 255);
    }

}



module.exports = Palette