const { get } = require("mongoose")

class Color{
    codHex 
    category
    red 
    green
    blue

    constructor(data){
        if(typeof data != 'undefined' && data.length > 1 ){
            this.codHex = this.generateBycolor(color)
        }else {
            this.codHex = this.randomCodHex()
        }
    }

    setCodHex(codHex){
        this.codHex = codHex
    }
    setRGB(red, green, blue){
        this.red = red
        this.green = green
        this.blue = blue
    }
    setCategory(category){
        this.category = category
    }

    randomCodHex(){
        let hex = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
            let random_color= "#";
            for(let i = 0; i < 6; i++){
                let afterArray = this.aleatorio(0, hex.length)
                random_color += hex[afterArray]
            }
            return random_color
    }
    color(){
        return this.codHex
    }

    aleatorio(lower,upper) {
        let num = upper - lower
        let random = Math.random() * num
        random = Math.floor(random)
        return parseInt(lower) + random
    }
    rgbToHex() { 
        return "#" + this.componentToHex(this.r) + this.componentToHex(this.g) + this.componentToHex(this.b);
    }
    hexToRgb() {
        newCodeHex = this.codHex.remplace(/^#/,'')
        let bigint = parseInt(newCodeHex, 16)
        this.r = (bigint >> 16) & 255
        this.g = (bigint >> 8) & 255
        this.b = bigint & 255
        return this.r, this.g, this.b
    }

    componentToHex(c) { 
        const hex = c.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }

    generateBycategory(category){
        
    }

    getRandomPastelColor(){
        const r = Math.floor((Math.random() * 128) + 127);
        const g = Math.floor((Math.random() * 128) + 127);
        const b = Math.floor((Math.random() * 128) + 127);
        this.setRGB(r, g, b)
    }
    getRandomNeonColor(){
        const colors = [
            "#FF00FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF0000", 
            "#FF6600", "#FF33CC", "#33FF66", "#66FF33", "#33FFFF"
        ]
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }
    getRandomEarthColor(){
        const colors = [ 
            "#A0522D", "#8B4513", "#D2B48C", "#DEB887", "#F4A460",
            "#CD853F", "#D2691E", "#BC8F8F", "#FFE4C4", "#8B0000" 
        ]
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex];
    }
    getRandomMetallicColor(){
        const colors = [ 
            "#D4AF37", "#C0C0C0", "#FFD700", "#DAA520","#B87333",
            "#E5E4E2", "#A97142", "#555D50", "#9E7E53", "#C3B091" 
        ]
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex];
    }

    getRandomMutedColor(){
        const r = Math.floor(Math.random() * 128)
        const g = Math.floor(Math.random() * 128)
        const b = Math.floor(Math.random() * 128)
        this.setRGB(r, g, b)
    }
}


module.exports = Color