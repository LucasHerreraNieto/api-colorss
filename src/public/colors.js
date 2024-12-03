class Color{
    codHex 

    constructor(){
        this.codHex = this.randomCodHex()
    }
    
    constructor(codHex){
        this.codHex = codHex
    }

    aleatorio(lower,upper) {
        let num = upper - lower
        let random = Math.random() * num
        random = Math.floor(random)
        return parseInt(lower) + random
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
}

module.exports = Color