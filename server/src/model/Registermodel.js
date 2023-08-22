const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const contactSchema = new Schema({
    loginId : {type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phoneno:{type:String},
   
})
const Registermodel = mongoose.model('register_tb',contactSchema)

module.exports= Registermodel