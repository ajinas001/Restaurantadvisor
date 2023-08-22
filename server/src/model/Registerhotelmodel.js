const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const contactSchema = new Schema({
    restuarantid : {type:mongoose.Types.ObjectId,ref:"hotelregister_tb"},
    loginId : {type:mongoose.Types.ObjectId,ref:"login-tb"},
    name:{type:String},
    email:{type:String},
    password:{type:String},
    district:{type:String},
   
})
const Registerhotelmodel = mongoose.model('hotelregister_tb',contactSchema)

module.exports= Registerhotelmodel