require('dotenv').config()
const express = require("express");
const req = require("express/lib/request");
const { type } = require("express/lib/response");
const res = require("express/lib/response");
const { fstat } = require('fs');
const fs=require('fs');
const app=express();
const port=process.env.PORT;
var mysql=require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME
  });

  app.use(express.urlencoded({extended:true}));

  app.get('/',(req,res)=>{
    res.status(200).send('Gyakorlás');
});

app.listen(port,()=>{
    console.log(`Életjel ${port}`)
});