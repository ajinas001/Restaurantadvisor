const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const contactSchema = new Schema({
    
 
    name:{type:String},
    district:{type:String},
    
   
})
const districtmodel = mongoose.model('district_tb',contactSchema)

module.exports= districtmodel