const mongoose  = require('mongoose')

const mongo_URL = "mongodb+srv://itsmeshubham49:portfolio2024@cluster0.whxlhtq.mongodb.net/food"
const mongoDB = () =>{
    try {
        mongoose.connect(mongo_URL).then(() =>console.log("connected to db") )
        .catch(()=> console.log("connection err"))       
    } catch (error) {
         console.log("err")
    }
}
        

module.exports = mongoDB;
