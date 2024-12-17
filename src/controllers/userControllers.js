const userServices = require('../services/userServices')


exports.register = async (req,res) =>{
    try{
        newUser = await userServices.registerUser(req.body)    
    
        res.status(200).json({message: 'User registered '+ newUser})
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.login = async (req, res) =>{
    try{
        const loggedUser = await userServices.loginUser(req.body); // Configurar la cookie 
        res.cookie('token', loggedUser.token, { 
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict', 
            maxAge: 3600000 
        }); 
        // Enviar la respuesta JSON 
        res.status(200).json({ message: 'User logged in ' + loggedUser.name });
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.logout = async (req, res) =>{
    res.json({
        message: "Hello from logout"
    })
}

exports.savePalette = async (req, res) =>{
    try{
    await userServices.savePalette(req.body)
    res.status(200).json({message: 'Palette saved'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.modifyUserName = async (req, res) =>{
    try{
        await userServices.modifyUserName(req.params.user,req.body.newName)
        res.status(200).json({message: 'User name modified'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.modifyUserEmail = async (req, res) =>{
    try{
    await userServices.modifyUserEmail(req.params.user,req.body.email)
    res.status(200).json({message: 'User email modified'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.modifyUserPassword = async (req, res) =>{
    try{
    await userServices.modifyUserPassword(req.params.user,req.body.password)
    res.status(200).json({message: 'User password modified'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.deleteUser = async (req, res) =>{
    try{
    await userServices.deleteUser(req.body)
    res.status(200).json({message: 'User deleted'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getPalettes = async (req, res) =>{
    try{
    const palettes = await userServices.getPalettes(req.params.user)
    res.status(200).json({message: palettes})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.getPalette = async (req, res) =>{
    try{
    const palettes = await userServices.getPalette(req.params.user,req.params.palette)
    res.status(200).json({message: palettes})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.deletePalette = async (req, res) =>{
    try{
    const palettes = await userServices.deletePalette(req.params.user, req.params.palette)
    res.status(200).json({message: palettes})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.modifyPaletteName = async (req,res) => {
    try{
    const palettes = await userServices.modifyPaletteName(req.params.user, req.params.palette, req.body.newName)
    res.status(200).json({message: palettes})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.changePassword = async (req,res) => {
    try{
    const palettes = await userServices.changePassword(req.params.user, req.body.oldPassword, req.body.newPassword)
    res.status(200).json({message: palettes})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.sendRecoveryEmail = async (req,res) =>{
    try{
    const recoveryEmail = await userServices.sendRecoveryEmail(req.params.user)
    res.status(200).json({message:"Recovery email sent"})
    }catch(err){
        res.status(400).json({message:err.message})
    }
}