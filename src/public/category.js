class Category{
    name

    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    
}


class PaletteCategory extends Category{
    constructor(name){
        super(name);
    }
}


class ColorCategory extends Category{
    constructor(name){
        super(name);
    }
}


module.exports = {PaletteCategory, ColorCategory}