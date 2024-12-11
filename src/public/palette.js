const Color = require("./colors.js")

class Palette{

    colors
    name = "nameless palette"
    catogory 

    constructor(data){
        if(data instanceof Array){
            this.colors = data
        }else if (data instanceof Color ){
            this.colors = this.generateMonocrhomaticPalette(data)
        }else{
            this.colors = this.generateColors(5)
        }
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

    generateMonocrhomaticPalette(color){
        const colors = []; colors.push(color)
        for (let i = 1; i < 5; i++) {
            let factor = 1 - (i / 5)
            const newRed = this.adjustLuminosity(color.red, factor)
            const newGreen = this.adjustLuminosity(color.green, factor)
            const newBlue = this.adjustLuminosity(color.blue, factor)
            colors.push(new Color('personalized', newRed, newGreen, newBlue)); 
        } 
        return colors;
    }

    adjustLuminosity(colorComponent,factor){
        const newColorComponent = Math.floor(colorComponent * factor)
        return Math.min(Math.max(newColorComponent, 0), 255);
    }

}

const newColor = new Color('personalized', 100, 50, 120)
const newPalette = new Palette(newColor)
console.log(newPalette)

//module.exports = Palette