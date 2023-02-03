/// Video - 49  ==> Get API With Mysql

const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});


connection.connect((err)=>{
    if(err){
        console.log("error is in Connection");
    }
    else{
        console.warn("connected");
    }
});

 module.exports = connection;