const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})


const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(process.env.CONECCTION_LINK,{
            dbName: 'users'
    })
        console.log('Conectado a la base de datos')
        return connection
    }catch(err){
        console.log(err)
    }
}


module.exports = {connectDB}
