const {UserModel} = require('../db/models/User.js');
const bcrypt = require('bcrypt');
const middleware = require('../middlewares/middlewares');


// Find user by Username
async function getUserByUserName (name) {
    try{
    const user = await UserModel.findOne({name: name})
    return user
    }catch{
        throw new Error("The user doesn't exist")    
    }
};

// User register
async function registerUser(user) {
    console.log(user)
    const userExist = await getUserByUserName(user.name)
    const hashedPassword = await bcrypt.hash(user.password, 10)
    if(!userExist) {
        try {
            middleware.validateUserNamePassword(user)
            const newUser = new UserModel({
                name: user.name,
                password: hashedPassword
            })
            await newUser.save()
            return newUser
        } catch (error) {
            throw new Error(error.message)
        }
        
    }else{
        throw new Error('User already exist')
    }
}

async function loginUser(user) {
    const userExist = await getUserByUserName(user.name)
    if(userExist) {
        const passwordMatch = await bcrypt.compare(user.password, userExist.password)
        if(passwordMatch) {
            console.log('User logged in')
            return userExist
        }else{
            throw new Error('Wrong password')
        }
    }else{
        throw new Error('User does not exist')
    }
}

async function savePalette(palette,user) {
    try{
    const userSaved = await getUserByUserName(user.name)
    await userSaved.updateOne({$push: {palettes: palette}})
    }catch(err){
        throw new Error(err)
    }
}


module.exports = {
    getUserByUserName,
    registerUser,
    loginUser,
    savePalette
}