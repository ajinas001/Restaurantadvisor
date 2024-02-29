const express = require ("express")
const Addhotelmodel = require("../model/Addhotelmodel")
const Adminrouter = express.Router()



Adminrouter.post('/viewhotelrequests',async(req,res)=>{
try {
    const details = await Addhotelmodel.find()
    if(details){
        res.status(200).json({
            success:"true",
            error:"false",
            data:details,
            message:"All hotels"

        })
    }
    else{
        res.status(404).json({
            success:"false",
            error:"true",
            message:"No hotels "
        })
    }
} catch (error) {
    console.log("catch error");
}
})

Adminrouter.put('/admin-accepting',async(req,res)=>{

   
    const id = req.body.restuarantid
    
    try {
        const data = await Addhotelmodel.findOneAndUpdate({restuarantid:id},{
            status:"accepted"
        })

        if(data){
            res.status(200).json({
                success:"true",
                error:"false",
                message:"Accepted successfully"
            })
        }
        else{
            res.status(404).json({
                success:"false",
                error:"true",
                message:"No hotel found"
            })
        }
        
    } catch (error) {
        console.log("catch error",error);
    }
})

Adminrouter.delete('/admin-deletehotels', async (req, res) => {
    const id = req.body.restuarantid;

    try {
        const data = await Addhotelmodel.findOneAndDelete({ restuarantid: id });

        if (data) {
            res.status(200).json({
                success: true,
                error: false,
                message: "Deleted successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                error: true,
                message: "No hotel found"
            });
        }

    } catch (error) {
        console.log("catch error", error);
        res.status(500).json({
            success: false,
            error: true,
            message: "Internal Server Error"
        });
    }
});


Adminrouter.put('/admin-blocking',async(req,tres)=>{

    const id = req.body.restuarantid
    try {
        const data = await Addhotelmodel.findOneAndUpdate({restuarantid:id},{
            status:"blocked"
        })

        if(data){
            res.status(200).json({
                success:"true",
                error:"false",
                message:"blocked successfully"
            })
        }
        else{
            res.status(404).json({
                success:"false",
                error:"true",
                message:"No hotel found"
            })
        }
        
    } catch (error) {
        console.log("catch error",error);
    }
})
Adminrouter.put('/admin-unblocking',async(req,tres)=>{

    const id = req.body.restuarantid
    try {
        const data = await Addhotelmodel.findOneAndUpdate({restuarantid:id},{
            status:"accepted"
        })

        if(data){
            res.status(200).json({
                success:"true",
                error:"false",
                message:"blocked successfully"
            })
        }
        else{
            res.status(404).json({
                success:"false",
                error:"true",
                message:"No hotel found"
            })
        }
        
    } catch (error) {
        console.log("catch error",error);
    }
})


module.exports = Adminrouter