const {ColorCategory} = require('./category')

class Color{
    codHex 
    category
    red 
    green
    blue

    constructor(data,red,green,blue){
        this.generateNewColor(data,red,green,blue)
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
        this.category = new ColorCategory(category)
    }
    getRed(){
        return this.red
    }
    getGreen(){
        return this.green
    }
    getBlue(){
        return this.blue
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
        const newCodHex = "#" + this.componentToHex(this.red) + this.componentToHex(this.green) + this.componentToHex(this.blue);
        this.setCodHex(newCodHex)
        return this.codHex
    }
    hexToRgb() {
        let newCodeHex = this.codHex.replace(/^#/,'')
        let bigint = parseInt(newCodeHex, 16)
        this.red = (bigint >> 16) & 255
        this.green = (bigint >> 8) & 255
        this.blue = bigint & 255
        return this.r, this.g, this.b
    }

    componentToHex(c) { 
        const hex = c.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }

    generateNewColor(category,red,green,blue){
        switch(category){
            case 'pastel':
                this.getRandomPastelColor()
                this.setCategory('pastel')
                this.setCodHex(this.rgbToHex())
                break
            case 'neon':
                this.setCodHex(this.getRandomNeonColor())
                this.setCategory('neon')
                this.hexToRgb()
                break
            case 'earth':
                this.setCodHex(this.getRandomEarthColor())
                this.setCategory('earth')
                this.hexToRgb()
                break
            case 'metallic':
                this.setCodHex(this.getRandomMetallicColor())
                this.setCategory('metallic')
                this.hexToRgb()
                break
            case 'muted':
                this.getRandomMutedColor()
                this.setCategory('muted')
                this.setCodHex(this.rgbToHex())
                break
            case 'personalized':
                this.getPersonalizedColor(red, green, blue)
                this.setCategory('personalized')
                this.setCodHex(this.rgbToHex())
                break
            default:
                this.setCodHex(this.randomCodHex())
                this.setCategory('random')
                this.hexToRgb()
                break
        }
    }

    getRandomPastelColor(){
        const red = Math.floor((Math.random() * 128) + 127);
        const green = Math.floor((Math.random() * 128) + 127);
        const blue = Math.floor((Math.random() * 128) + 127);
        this.setRGB(red, green, blue)
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
        const red = Math.floor(Math.random() * 128)
        const green = Math.floor(Math.random() * 128)
        const blue = Math.floor(Math.random() * 128)
        this.setRGB(red, green, blue)
    }

    getPersonalizedColor(red,green,blue){
        this.setRGB(red, green, blue)
    }
}


module.exports = Color