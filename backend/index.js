const express = require ('express')
const mongoDB = require('./db');
const cors = require('cors')
const router = require ('./routes/createUser.js')
// db connection
mongoDB();
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', router)
app.use('/api', router)




app.listen(5000 , () =>{
    console.log("hello")
})