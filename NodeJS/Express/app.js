const express = require("express")
//Imported Express Module
const path=require("path");
const app=express(); 
//Created and intialized an express app
const port=80;
//App will be run on port 80

//For serving static files
app.use('/static',express.static('static'));

//Set the template engine as pug
app.set('view engine', 'pug')

//Set the views directory
app.set('views',path.join(__dirname,'views'));

//Our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo', { title: 'Hey Chandra', message: 'Hello there and thanks for telling me how to use pubg without B!' })
});

app.get("/",(req,res)=>{
    res.status(200).send("This is homepage of my first express app")
});

app.get("/about",(req,res)=>{
    res.send("This is about page of my first express app")
});

app.post("/about",(req,res)=>{
    res.send("This is a post request of about page of my first express app")
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found")
});

app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});