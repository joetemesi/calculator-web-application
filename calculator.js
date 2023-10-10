const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //post nested objects / form data

app.get("/", function(req, res){
    // res.send("Hello World.");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    res.send("Thanks");
})

app.listen(3000, function(){
    console.log("Started on port: 3000");
})