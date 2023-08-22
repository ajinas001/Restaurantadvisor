const express = require('express')
const Registermodel = require('../model/Registermodel')
const Registerhotelmodel = require('../model/Registerhotelmodel')
const Addhotelmodel = require('../model/Addhotelmodel')
const loginmodel = require('../model/loginmodel')
var bcrypt = require('bcryptjs')
const Registerrouter = express.Router()
const multer = require('multer')
const districtmodel = require('../model/Districtmodel')
const hoteldistrictmodel = require('../model/Hoteldistrictmodel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/hotel/public/logo')
    },
    filename: function (req, file, cb) {

        cb(null, req.body.logo)
    }
})

const upload = multer({ storage: storage })

Registerrouter.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json9({
        message: "logo added"
    })
})


Registerrouter.post('/save-user', async (req, res) => {
    try {

        const { name, password, email, mobileno, phoneno } = req.body;

        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "1",
            status: "0"
        }
        console.log(loginData);
        const logins = await loginmodel(loginData).save()


        // const data = {
        //     name: req.body.name,
        //     password: req.body.password,
        //     email: req.body.email

        // }

        const details = {
            loginId: logins._id,
            email: email,
            phoneno: phoneno
            // mobileno: mobileno
        }
        const reg = await Registermodel(details).save()
        console.log("reg", reg);


        if (reg) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(200).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }
})
Registerrouter.post('/save-hotel', async (req, res) => {
    try {


        const { name, password, email, mobileno, district } = req.body;

        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: name,
            password: hashedPass,
            role: "2",
            status: "0"
        }
        console.log(loginData);
        const logins = await loginmodel(loginData).save()


        // const data = {
        //     name: req.body.name,
        //     password: req.body.password,
        //     email: req.body.email

        // }

        const details = {
            loginId: logins._id,
            email: email,
            district: district,
            // mobileno: mobileno
        }
        const reg = await Registerhotelmodel(details).save()
        console.log("reg", reg);


        if (reg) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(200).json({
            success: true,
            error: false,
            message: "can't add"
        })
    }
})



Registerrouter.get('/view-hotel/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log('id', id);
        const details = await Addhotelmodel.findOne({ restuarantid: id })
        console.log(details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})


Registerrouter.get('/save-district/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log('id', id);
        const details = await Addhotelmodel.findOne({ restuarantid: id })
        console.log(details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})


Registerrouter.get('/view-district', async (req, res) => {
    try {
        
        
        const details = await districtmodel.find()
        console.log(details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})


Registerrouter.post('/add-district', async (req, res) => {   
    try {
      const  {district} =  req.body;
        const details= {
           district:district
        } 
        const user = await districtmodel(details).save()
        console.log(user);
        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})

// Registerrouter.post('/delete/:id', async(req, res) => {
//     try {
//         const id = req.params.id
//         console.log('id=',id);
//         const contactdetails =await Registermodel.deleteOne({_id:id})
//         console.log(contactdetails);
//         if(contactdetails){
//             return  res.status(200).json({
//                 success: true,
//                 error: false,
//                 message: "deleted"
//             })
//         }
//     } catch (error) {

//     }

// })


Registerrouter.post('/save-login', async (req, res) => {

    try {
        const { name, password } = req.body;
        const olduser = await loginmodel.findOne({ name })

        if (!olduser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "username not found"
            })
        }
        const encrypt = await bcrypt.compare(password, olduser.password)
        if (encrypt == true) {
            if (olduser.role == 1) {
                const users = await Registermodel.findOne({ loginId: olduser._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    User_id: users._id,
                    message: "login successfully"
                })
            }
            if (olduser.role == 2) {
                const Restaurant = await Registerhotelmodel.findOne({ loginId: olduser._id })
                console.log(Restaurant);
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    hotel_id: Restaurant._id,
                    message: "login successfully"
                })
            }
            if (olduser.role == 0) {
                const users = await Registermodel.findOne({ loginId: olduser._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    User_id: users._id,
                    message: " admin loged successfully"
                })
            }


        }
        if (encrypt == false) {

            return res.status(400).json({
                success: true,
                error: false,
                message: "Incorrect password!!!"
            })
        }


    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "error please check again"
        })
    }
})

Registerrouter.post('/add-hotel', async (req, res) => {

    try {


        const data = {
            name: req.body.name,
            district:req.body.district,
            password: req.body.password,
            email: req.body.email,
            place: req.body.place,
            pin: req.body.pin,
            time: req.body.time,
            phone: req.body.phone,
            special: req.body.special,
            meals: req.body.meals,
            features: req.body.features,
            logo: req.body.logo,
            restuarantid: req.body.restuarantid,

            // image1: req.file.filename,
            // image2: req.file.filename,



        }
        


        const user = await Addhotelmodel(data).save()
        const district = await hoteldistrictmodel(data).save()

        
        console.log(data);



        

        if (user) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        if (district) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }

    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong!!!!!"
        })
    }
})






module.exports = Registerrouter