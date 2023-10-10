const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); //post nested objects / form data

app.get("/", function(req, res){
    // res.send("Hello World.");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var operator = req.body.operator;

    // console.log(operator);
    if(operator == '+'){
        var result = num1+num2;
    } else if (operator == '-'){
        var result = num1-num2;
    } else if (operator == '*'){
        var result = num1*num2;    
    } else if (operator == '/'){
        var result = num1/num2;
    } else {
        res.send(operator + " is an invalid operator. Kindly use either +(Addition), -(Subtraction), *(Multiplication) or /(Division)");
        return;
    }

    res.send("The result of the operation is: " +result);
})

app.listen(3000, function(){
    console.log("Started on port: 3000");
})