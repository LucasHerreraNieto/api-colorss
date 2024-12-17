//export express
const express = require('express')

//export mongoose
const mongoose = require('mongoose')

//export connect Link
const {connectDB} = require('./db/configs/conecct-mongoDB')

// export body parser
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

//connect to database
connectDB()

const app = express()

app.use(bodyParser.json())

app.use(cookieParser())

app.use(cors({
    origin: 'XXXXXXXXXXXXXXXXXXXXX',
    credentials: true
}))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Colorss is running on PORT: ${PORT}`)
})

app.use('/',require('./routes/userRoutes'))

app.use('/', require('./routes/paletteRoutes'))

