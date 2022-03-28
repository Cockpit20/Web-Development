const express = require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=8000;

app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
})

app.post('/contact',(req,res)=>{
    name=req.body.name
    phone=req.body.phone
    email=req.body.email
    address=req.body.address
    concern=req.body.desc

    let outputToWrite=`The name of the client is ${name},his/her phone number is ${phone},his/her email id is ${email}, resisdes at ${address}. His/her concern : ${concern} `
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form has been submitted sucessfully'}
    res.status(200).render('contact.pug',params);
})

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});