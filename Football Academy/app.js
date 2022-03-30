const express=require("express");
const fs=require("fs");
const path=require("path");
const mongoose = require('mongoose');
const app=express();
const port=3000;

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost/admissionFootball');
    console.log("We are connected ...")
}

const admissionSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,   
    address: String,
    desc: String
});

const Admission = mongoose.model('Admission', admissionSchema);

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view-engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
});

app.get('/admission',(req,res)=>{
    const params={};
    res.status(200).render('admission.pug');
});

app.post('/admission',(req,res)=>{
    var myData=new Admission(req.body);
    myData.save().then(()=>{
        res.send("Your form has been submitted successfully. You can now close this page!")
    }).catch(()=>{
        res.status(404).send("Failed to submit your form. Try again! ")
    })
});

app.listen(port,()=>{
    console.log(`The server has started successfully on port ${port}`);
});