const userServices = require('../services/userServices')


exports.register = async (req,res) =>{
    try{
    userServices.registerUser(req.body)
    }catch(err){
        res.status(400).json({message: err.message})
    }
    res.json({
        message: "Hello from register"
    })
}
exports.login = async (req, res) =>{
    try{
    userServices.loginUser(req.body)
    }catch{
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
    userServices.savePalette(req.body, req.user)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}