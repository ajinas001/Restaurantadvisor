const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const contactSchema = new Schema({
    restuarantid : {type:mongoose.Types.ObjectId,ref:"hotelregister_tb"},
    name:{type:String},
    district:{type:mongoose.Types.ObjectId,ref:"district_tb"},
    password:{type:String},
    place:{type:String},
    pin:{type:String},
    time:{type:String},
    phone:{type:String},
    special:{type:String},
    meals:{type:String},
    features:{type:String},
    logo:{type:String},
  

   
})
const Addhotelmodel = mongoose.model('addhotel_tb',contactSchema)

module.exports= Addhotelmodel