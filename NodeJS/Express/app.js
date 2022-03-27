const express = require("express")
//Imported Express Module
const app=express(); 
//Created and intialized an express app
const port=80;
//App will be run on port 80

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