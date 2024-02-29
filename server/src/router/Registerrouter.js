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
var jwt = require('jsonwebtoken');
const Checkauth = require('../middleware/Checkauth')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/hotel/public/uploadedimages');
    },
    filename: function (req, file, cb) {
        cb(null, (file.originalname));
    },
});

const upload = multer({ storage: storage });

Registerrouter.post('/upload-logo', upload.single('logo'), (req, res) => {
    res.status(200).json({
        message: "logo added"
    })
})


Registerrouter.post('/upload-images', upload.array('files', 6), (req, res) => {
    res.status(200).json({
        message: "images added"
    })
})


Registerrouter.post('/idfinding', async (req, res) => {
    const id = req.body.id;
    console.log(req.body);
    console.log("id==",id);
    const details = await Addhotelmodel.findOne({ restuarantid: id })
    console.log("details", details);
    if (details) {

        res.status(200).json({
            message: "data already present",
            data: details

        })

    }
    else {
        res.status(404).json({
            message: "no data"
        })
    }
})

Registerrouter.post('/add-hotel', async (req, res) => {

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
            logo: req.body.logo,
            status: "pending",
            restuarantid: req.body.restuarantid,
            images: req.body.images,


        }

        console.log(data, "hoteldetails");

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


        const { username, password, email, mobileno, district } = req.body;

        const hashedPass = await bcrypt.hash(password, 12)
        const loginData = {
            name: username,
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


Registerrouter.get('/view-districtwisehotel/:district', async (req, res) => {
    try {
        const district = req.params.district
        console.log('dis', district);
        const details = await Addhotelmodel.find({ district: district })
        console.log(details, "districtwisedetails");
        if (details && details.length > 0) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            });
        } else {
            return res.status(404).json({
                success: false,
                error: true,
                Response: "No hotels found for the specified district"
            });
        }



    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})



Registerrouter.get('/view-hotel/:id', async (req, res) => {
    try {
        const id = req.params.id

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

Registerrouter.post('/update-hoteldetails', async (req, res) => {
    try {
        const restuarantid = req.body.restuarantid
        console.log('data', req.body);
        console.log('id=', restuarantid);
        const details = await Addhotelmodel.findOneAndUpdate({ restuarantid: restuarantid },

            {
                name: req.body.name,
                email: req.body.email,
                district: req.body.district,
                pin: req.body.pin,
                place: req.body.place,
                time: req.body.time,
                meals: req.body.meals,
                phone: req.body.phone,
                features: req.body.features,
                special: req.body.special,
                status: "pending",
                logo: req.body.logo,
                images: req.body.images,

            }
        )
        console.log(details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details,
                message: "Updated successfully"
            })

        }



    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            message: "Not found"
        })

    }

})


Registerrouter.post('/saverating', async (req, res) => {
    try {
        const userId = req.body.userid;
        const restuarantid = req.body.restuarantid;
        const overallRating = req.body.overallRating;
        const serviceRating = req.body.serviceRating;
        const valueRating = req.body.valueRating;
        const atmosphereRating = req.body.atmosphereRating;
        const foodRating = req.body.foodRating;

        console.log('data', req.body);
        console.log('userId=', userId);
        console.log('restuarantid=', restuarantid);

        let details = await Addhotelmodel.findOne({ restuarantid: restuarantid });

        if (!details) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Restaurant not found"
            });
        }

        const existingRatingIndex = details.ratings.findIndex(rating => rating.userId.toString() === userId.toString());

        if (existingRatingIndex !== -1) {
            // Update the existing rating if found
            details.ratings[existingRatingIndex].overallRating = overallRating;
            details.ratings[existingRatingIndex].foodRating = foodRating;
            details.ratings[existingRatingIndex].valueRating = valueRating;
            details.ratings[existingRatingIndex].serviceRating = serviceRating;
            details.ratings[existingRatingIndex].atmosphereRating = atmosphereRating;
        } else {
            // If the user hasn't rated before, push a new rating
            details.ratings.push({
                userId: userId,
                overallRating: overallRating,
                foodRating: foodRating,
                valueRating: valueRating,
                serviceRating: serviceRating,
                atmosphereRating: atmosphereRating
            });
        }

        details = await details.save();

        console.log(details);

        return res.status(200).json({
            success: true,
            error: false,
            data: details,
            message: "Rating updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: true,
            message: "Failed to update rating"
        });
    }
});

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
Registerrouter.post('/add-district', Checkauth, async (req, res) => {
    try {
        const { district } = req.body;
        const details = {
            district: district
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




// Registerrouter.post('/save-login', async (req, res) => {
//     try {
//         const { name, password } = req.body;
//         const olduser = await loginmodel.findOne({ name });

//         if (!olduser) {
//             return res.status(404).json({
//                 success: false,
//                 error: true,
//                 message: "Username not found"
//             });
//         }

//         const encrypt = await bcrypt.compare(password, olduser.password);

//         if (encrypt) {
//             let tokenPayload = {
//                 user_role: olduser.role,
//                 login_id: olduser._id
//             };
//             let token;

//             if (olduser.role == 1) {
//                 const users = await Registermodel.findOne({ loginId: olduser._id });
//                 tokenPayload.User_id = users._id;
//                 token = jwt.sign(tokenPayload, 'key', { expiresIn: "2h" });
//                 return res.status(200).json({
//                     success: true,
//                     error: false,
//                     role: olduser.role,
//                     login_id: olduser._id,
//                     User_id: tokenPayload.User_id,
//                     token: token,
//                     message: "Login successful"
//                 });
//             } else if (olduser.role == 2) {
//                 const Restaurant = await Registerhotelmodel.findOne({ loginId: olduser._id });
//                 tokenPayload.User_id = Restaurant._id;
//                 token = jwt.sign({ tokenPayload }, 'key', { expiresIn: "2h" });
//                 return res.status(200).json({
//                     success: true,
//                     error: false,
//                     role: olduser.role,
//                     login_id: olduser._id,
//                     User_id: tokenPayload.User_id,
//                     token: token,
//                     message: "Hotel Login successful"
//                 });
//             } else if (olduser.role == 0) {
//                 const admindata = await Registermodel.findOne({ loginId: olduser._id });
//                 tokenPayload.User_id = admindata._id;
//                 token = jwt.sign({ user_role: olduser.role, login_id: olduser._id, User_id: admindata._id, }, 'key', { expiresIn: "2h" });
//                 return res.status(200).json({
//                     success: true,
//                     error: false,
//                     role: olduser.role,
//                     login_id: olduser._id,
//                     User_id: tokenPayload.User_id,
//                     token: token,
//                     message: "Admin Login successful"
//                 });
//             }


//         } else {
//             return res.status(400).json({
//                 success: false,
//                 error: true,
//                 message: "Incorrect password"
//             });
//         }
//     } catch (error) {
//         console.error("Error generating token:", error);
//         return res.status(500).json({
//             success: false,
//             error: true,
//             message: "Error occurred during token generation"
//         });
//     }
// });
Registerrouter.post('/save-login', async (req, res) => {
    try {


        const { name, password } = req.body;
        const user = await loginmodel.findOne({ name });

        if (!user) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Username not found"
            });
        }

        const encrypt = await bcrypt.compare(password, user.password);

        if (encrypt) {

            if (user.role == 1) {
                const users = await Registermodel.findOne({ loginId: user._id });
                var token = jwt.sign({ user_role: user.role, login_id: user._id, User_id: users._id, }, 'key', { expiresIn: "2h" });
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    User_id: users._id,
                    token: token,
                    message: "Login successful"
                });
            } else if (user.role == 2) {
                const hotelusers = await Registerhotelmodel.findOne({ loginId: user._id });
                var token = jwt.sign({ user_role: user.role, login_id: user._id, user_id: hotelusers._id, }, 'key', { expiresIn: "2h" });
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    User_id: hotelusers._id,
                    token: token,
                    message: "Hotel Login successful"
                });
            } else if (user.role == 0) {
                const users = await Registermodel.findOne({ loginId: user._id });

                var token = jwt.sign({ user_role: user.role, login_id: user._id, User_id: users._id, }, 'key', { expiresIn: "2h" });
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    // User_id: users_id,
                    token: token,
                    message: "Admin Login successful"
                });
            }


        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Incorrect password"
            });
        }
    } catch (error) {
        console.error("Error generating token:", error);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Error occurred during token generation"
        });
    }
});















module.exports = Registerrouter