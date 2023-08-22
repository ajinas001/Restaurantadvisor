const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority")

const Schema = mongoose.Schema
const contactSchema = new Schema({
    
 
    name:{type:String},
   
    
   
})
const hoteldistrictmodel = mongoose.model('hotel_district_tb',contactSchema)

module.exports= hoteldistrictmodel