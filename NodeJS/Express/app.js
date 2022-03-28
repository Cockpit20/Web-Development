const express = require("express");//Imported Express Module
const path=require("path");
const fs=require("fs");
const app=express(); //Created and intialized an express app
const port=80;//App will be run on port 80

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//For serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')//Set the template engine as pug
app.set('views',path.join(__dirname,'views'));//Set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the best content on the internet so use it wisely";
    const params={'title':'Gym Website'};
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more

    let outputToWrite=`The name of the client is ${name}, ${age} years old, ${gender}, resisding at ${address}. More about him/her: ${more} `
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form has been submitted sucessfully'}
    res.status(200).render('index.pug',params);
})

//Our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Chandra', message: 'Hello there and thanks for telling me how to use pubg without B!' })
// });

// app.get("/",(req,res)=>{
//     res.status(200).send("This is homepage of my first express app")
// });

// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app")
// });

// app.post("/about",(req,res)=>{
//     res.send("This is a post request of about page of my first express app")
// });

// app.get("/this",(req,res)=>{
//     res.status(404).send("This page is not found")
// });


//START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});