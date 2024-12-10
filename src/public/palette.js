const Color = require("./colors.js")

class Palette{

    colors
    name = "nameless palette"

    constructor(data){
        if(data instanceof Array){
            this.colors = data
        }else if (data instanceof Color || typeof data == 'string'){
            this.colors = this.generateBycolor(data)
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

    generateBycolor(color) {
        colors = []
        colors.push(new Color(color))
        colors.push(this.generateColors(4))
        return colors
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

}


module.exports = Palette