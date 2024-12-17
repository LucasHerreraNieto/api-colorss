const {UserModel} = require('../db/models/User.js');
const bcrypt = require('bcrypt');
const middleware = require('../middlewares/Middlewares.js');
const jwt = require('jsonwebtoken');



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
            const token = jwt.sign({name: userExist.name}, process.env.JWT_SECRET, {expiresIn: '1h'})
            console.log('User logged in')
            return {name: userExist.name, token: token} // Return the user name and token
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

async function logout(cookie) {
    try{
        return cookie.replace('token=','',
            {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
                maxAge: 0
            }
        )   
    }catch(err){
        throw new Error(err)
    }
    
}

async function savePalette( user,palette) {
    try{
    const userSaved = await getUserByUserName(user)
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
        const userSaved = await getUserByUserName(user)
        middleware.compareFullUser(userSaved)
        if(!userSaved) throw new Error('User does not exist')
        await userSaved.deleteOne()
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserName (user, newName) {
    try{
            const userName= user.name     
            const userSaved = await getUserByUserName(userName)
            if(!userSaved) throw new Error('User does not exist')
            if(await getUserByUserName(newName)) throw new Error('User already exist')
            await userSaved.updateOne({$set: {name: newName}})
            return userSaved.name
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserEmail (user,email) {
    try{
        const userName = user.name
        const userSaved = await getUserByUserName(userName)
        if(!userSaved) throw new Error('User does not exist')
        await userSaved.updateOne({$set: {email: email}})
        middleware.email.parse(email)
        return userSaved.email
    }catch(err){
        throw new Error(err)
    }
}

async function modifyUserPassword(user,password) {
    try{
        const userName = user.name
        if(password.length < 6) throw new Error('Password must be 6 or more characters long')
        const hashedPassword = await bcrypt.hash(password, 10)
        const userSaved = await getUserByUserName(userName)
        if(!userSaved) throw new Error('User does not exist')
        await userSaved.updateOne({$set: {password: hashedPassword}})
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

async function sendRecoveryEmail(user){
    try{
    const userSaved = await getUserByUserName(user.name)
    if(!userSaved) throw new Error('User does not exist')
    const token = jwt.sign({name: userSaved.name}, process.env.JWT_SECRET, {expiresIn: '1h'})
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userSaved.email,
        subject: 'Password recovery',
        text: `Click here to recover your password: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${token}`
    }
    await middleware.transporter.sendMail(mailOptions)
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
    deletePalette,
    modifyPaletteName,
    getPalette,
    changePassword,
    sendRecoveryEmail,
    logout
}