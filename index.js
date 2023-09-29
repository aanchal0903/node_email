const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/se",(req,res)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"aanchaldayaramani36@gmail.com",
            pass:"luvnnqxqdohhdihv"


        }
    });
    let mailOptions ={
        from:"aanchaldayaramani36@gmail.com",
        to:"2021.aanchal.dayaramani@ves.ac.in",
        subject:"Enquiry from "+req.body.name,
        text:"phone = "+req.body.phone + "query "+req.body.query
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if (err)
        res.sendStatus(500).json({"Message ":"serer error"});
res.status(200).json({"Message ": "email sent"});
    
    })
});
app.listen(9000,()=>{console.log("ready at @9000");});
