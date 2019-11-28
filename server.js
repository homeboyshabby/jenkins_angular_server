const express = require("express");
var app = express();
const mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    database:"mean",
    user : "root",
    password : "manager"
})

connection.connect();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/list",(req,resp)=>{
    var sql = "select * from company";
    connection.query(sql,(err,res)=>{
        if(err)
        {
            resp.send(JSON.stringify(err));
        }
        else
        {
            resp.send(JSON.stringify(res));
        }
    });
})


app.listen("9898",()=>{
    console.log("server started on 9898");
})
