const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    restuarantid: { type: mongoose.Types.ObjectId, ref: "hotelregister_tb" },
    name: { type: String },
    email: { type: String },
    district: { type: String },
    password: { type: String },
    place: { type: String },
    pin: { type: String },
    time: { type: String },
    phone: { type: String },
    special: { type: String },
    meals: { type: String },
    features: { type: String },
    status: { type: String },
    logo: { type: String },
    images: { type: [String] },
    ratings: [{
        userId: { type: mongoose.Types.ObjectId },
        overallRating: { type: Number },
        serviceRating: { type: Number },
        valueRating: { type: Number },
        atmosphereRating: { type: Number },
        foodRating: { type: Number }
    }]
});

const Addhotelmodel = mongoose.model('hoteldetails_tb', contactSchema);

module.exports = Addhotelmodel;
