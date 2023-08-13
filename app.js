const express=require("express")
const bodyParser=require("body-parser")
const _ = require('lodash')

const posts=[];

const app=express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")


app.get("/testing/:topic",(req,res)=>{
    const reqTitle=_.lowerCase(req.params.topic)
    posts.forEach(function(post){
        var storedTitle=_.lowerCase(post.title)
        if(storedTitle==reqTitle){
            res.render("cont",{post :post})
        }
    })

})

app.get("/",(req,res)=>{
    res.render("index",{posts :posts})
})

app.get("/AboutUs",(req,res)=>{
    res.render("AboutUs")
})
app.get("/ContactUs",(req,res)=>{
    res.render("ContactUs")
})
app.get("/compose",(req,res)=>{
    res.render("compose")
})

app.post("/compose",(req,res)=>{
    let a={
        content: req.body.newitems,
        title: req.body.heading
    };
    posts.push(a);
    res.redirect('/')
})

app.listen(80,()=>{
    console.log("listening")
})