class Category{
    id 
    name

    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    
}


class PaletteCategory extends Category{
    constructor(id, name){
        super(id, name);
    }
}


class ColorCategory extends Category{
    constructor(id, name){
        super(id, name);
    }
}

class userCategory extends Category{
    constructor(id, name){
        super(id, name);
    }
}

module.exports = {PaletteCategory, ColorCategory, userCategory}