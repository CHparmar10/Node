
//#region  /// Video - 48 ==> mysql connection

// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"test"
// });


// connection.connect((err)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.warn("connected");
//     }
// });


// connection.query("select * from users",(err,result)=>{
//     console.warn("result",result);
// });
//#endregion


/// Video - 49  ==> Get Api With Mysql

const express = require("express");
const conn = require('./config');
const app = express();

app.use(express.json);

//#region  Get API With MySql

app.get("/",(req,res)=>{
    conn.query("select * from users",(err,result)=>{
        if(err){
            res.send("error");
        }    
        else{
            res.send(result);
        }
    });
    //res.send("route done");
});

//#endregion

/// Video - 50  ==> Post API With MySql

//#region  Insert Api With Mysql

// app.post("/",(req,res)=>{

//     //const data = {name:"chirag",Password:"3030",user_type:"visitor"};  // using Static data insert record
//     const data = req.body; // dynamic data insert records
//     conn.query("Insert Into users SET ?",data,(err,result)=>{
//         if(err){
//             err;
//         }
//         else{
//             res.send(result);
//         }
//     });

// });
//#endregion



/// Video - 51 - Put  ==> Put Api With MySql

//#region Static data Pass

// app.put("/",(req,res)=>{
//     const data = ["tony","0000",10];
//     conn.query("Update users SET name=?, password=?,usertype=?",data,(err,result,fields)=>{
//         if(err){
//             throw err;
//         }
//         else{
//             res.send(result);
//         }
//     });
//     res.send("update api working");
// });

//#endregion

//#region Dynamic data Pass

app.put("/:id",(req,res)=>{
    const data = [req.body.name,req.body.password,req.body.usertype,req.params.id];
    conn.query("Update users SET name=?, password=?,usertype=?",data,(err,result,fields)=>{
        if(err){
            throw err;
        }
        else{
            res.send(result);
        }
    });
    res.send("update api working");
});

//#endregion


//#region  /// Video - 52 ==> Delete APi With Mysql

// app.delete("/:id",(req,res)=>{
//     conn.delete("Delete from users where id =" + req.params.id,(err,result,fields)=>{
//         if(err){
//             throw err;
//         }
//         else{
//             res.send(result);
//         }
//     });
// });

//#endregion


app.listen("4300");
