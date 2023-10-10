const express = require("express");

const app = express();

app.get("/", function(req, res){
    // res.send("Hello World.");
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
    console.log("Started on port: 3000");
})