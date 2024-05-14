const express = require('express')
const Addhotelmodel = require('../model/Addhotelmodel')
const multer = require('multer')

const addhotelrouter = express.Router()




addhotelrouter.post('/add-hotel', async (req, res) => {
    try {


        const data = {
            name: req.body.name,
            district: req.body.district,
            password: req.body.password,
            email: req.body.email,
            place: req.body.place,
            pin: req.body.pin,
            time: req.body.time,
            phone: req.body.phone,
            special: req.body.special,
            meals: req.body.meals,
            features: req.body.features,
            logo: req.file.filename,
            // image1: req.file.filename,
            // image2: req.file.filename,



        }
        console.log(data);


        const user = await Addhotelmodel(data).save()
        console.log(data);

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }

    }
    catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "something went wrong"
        })
    }
})



module.exports = addhotelrouter