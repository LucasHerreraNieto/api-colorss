const {UserModel} = require('../db/models/User.js');
const bcrypt = require('bcrypt');
const middleware = require('../middlewares/Middlewares.js');
const { get } = require('mongoose');

userLogged = false;

// Find user by Username
async function getUserByUserName (name) {
    try{
    const user = await UserModel.findOne({name: name})
    return user
    }catch(err){
        throw new Error(err)    
    }
};

// User register
async function registerUser(user) {
    const userExist = await getUserByUserName(user.name)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    if(!userExist) {
        try {
            middleware.compareFullUser(user)
            const newUser = new UserModel({
                name: user.name,
                password: hashedPassword,
                email: user.email
            })
            await newUser.save()
            console.log('User registered')
            return newUser.name
        } catch (error) {
            throw new Error(error.message)
        }
        
    }else{
        throw new Error('User already exist')
    }
}

async function loginUser(user) {
    try{
    middleware.compareUserLogIn(user)
    const userExist = await getUserByUserName(user.name)
    if(userExist) {
        const passwordMatch = await bcrypt.compare(user.password, userExist.password)
        if(passwordMatch) {
            userLogged = true
            console.log('User logged in')
            return userExist.name
        }else{
            throw new Error('Wrong password')
        }
    }else{
        throw new Error('User does not exist')
    }
    }catch(err){
        throw new Error(err)
    }
}

async function savePalette(data) {
    try{
    const {name, palette} = data
    const userSaved = await getUserByUserName(name)
        if(userSaved.palettes.length < 5) {
            await userSaved.updateOne({$push: {palettes: palette}})        
        }else{
            throw new Error('You can only save 5 palettes')
        }
    }catch(err){
        throw new Error(err)
    }
}

async function deleteUser (user) {
    try{
    middleware.compareFullUser(user)
    const userSaved = await getUserByUserName(user.name)
    if(!userSaved) throw new Error('User does not exist')
    await userSaved.deleteOne()
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserName (user, newName) {
    try{
        if(userLogged){
            const userName= user.name     
            const userSaved = await getUserByUserName(userName)
            if(!userSaved) throw new Error('User does not exist')
            if(await getUserByUserName(newName)) throw new Error('User already exist')
            await userSaved.updateOne({$set: {name: newName}})
            return userSaved.name
        }else{
            throw new Error('User not logged in')
        }
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserEmail (user,email) {
    try{
    if(userLogged){ 
        const userName = user.name
        const userSaved = await getUserByUserName(userName)
        if(!userSaved) throw new Error('User does not exist')
        await userSaved.updateOne({$set: {email: email}})
        middleware.email.parse(email)
        return userSaved.email
    }else{ 
        throw new Error('User not logged in')
    }
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserPassword(user,password) {
    try{
    if(userLogged){ 
        const userName = user.name
        if(password.length < 6) throw new Error('Password must be 6 or more characters long')
        const hashedPassword = await bcrypt.hash(password, 10)
        const userSaved = await getUserByUserName(userName)
        if(!userSaved) throw new Error('User does not exist')
        await userSaved.updateOne({$set: {password: hashedPassword}})
    }else{
        throw new Error('User not logged in')
    }
    }catch(err){
        throw new Error(err)
    }
}

async function getPalettes(user){
    const userSaved = await getUserByUserName(user.name)
    if(!userSaved) throw new Error('User does not exist')
    return userSaved.palettes
}

async function getPalette(user, palette){
    const userSaved = await getUserByUserName(user.name)
    if(!userSaved) throw new Error('User does not exist')
    return userSaved.palettes[palette]
}

async function deletePalette(user, palette){
    try{
        const userSaved = await getUserByUserName(user.name)
        if(!userSaved) throw new Error('User does not exist')
        if (userSaved.palettes.length === 0) throw new Error()
        await userSaved.updateOne({$pull: {palettes: userSaved.palettes[palette]}})
        if(userSaved.nModified) console.log('Palette deleted')
    }catch(err){
        throw new Error(err)
    }
}

async function modifyPaletteName(user,palette,newName) {
    try{
    const userSaved = await getUserByUserName(user.name)
    if(!userSaved) throw new Error('User does not exist')
    const palettes = userSaved.palettes
    if(!palettes[palette]) throw new Error('Palette does not exist')
    palettes[palette].changeName(newName)
    }catch(err){
        throw new Error(err)
    }
}

module.exports = {
    getUserByUserName,
    registerUser,
    loginUser,
    savePalette,
    deleteUser,
    modifyUserName,
    modifyUserEmail,
    modifyUserPassword,
    getPalettes,
    getPalette,
    deletePalette,
    modifyPaletteName
}