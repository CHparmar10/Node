/// video - 25 ==> Express js Middleware

// const express = require("express");
// const app = express();

// const reqfilter = (req,res,next)=>{
//     //console.log(reqfilter);

//     if(!req.query.age){
//         res.send("Please provide age");
//     }
//     else if(req.query.age < 18){
//         res.send("you can not access this page");
//     }
//     else{
//         next();
//     }
// };

// app.use(reqfilter);

// app.get("",(req,res)=>{
//     res.send("Welcome to home page");
// })

// app.get("/Users",(req,res)=>{
//     res.send("Welcome to users page");
// })

// app.listen(4300);


/// video - 26 ==> Route level middleware

// const express = require("express");
// const reqfilter = require("./middleware");
// const app = express();
// const route = express.Router();
// //app.use(reqfilter);
// route.use(reqfilter);

// app.get("",(req,res)=>{
//     res.send("Welcome to home page");
// })

// app.get("/Users",(req,res)=>{
//     res.send("Welcome to users page");
// })

// route.get("/about",(req,res)=>{
//     res.send("Welcome to about page");
// })

// route.get("/contact",(req,res)=>{
//     res.send("Welcome to contact us page");
// })

// app.use('/',route);
// app.listen(4300);


/// video - 30 ==> Connect MongoDB with Node js

// const { MongoClient } = require("mongodb");
// const url  = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-commerce';

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     collection = db.collection("products");
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();


/// Video - 31 ==> Read Data from mongoDB

// const dbConnection = require('./mongodb');

// // const { MongoClient } = require("mongodb");
// // const url = 'mongodb://localhost:27017';
// // const client = new MongoClient(url);
// // const database = 'e-commerce';

// // async function dbConnection() {
// //     let result = await client.connect();
// //     let db = result.db(database);
// //     return db.collection("products");
// //     // let response = await collection.find({name:'U10'}).toArray();
// //     // console.log(response);
// // }

// // dbConnection().then((res) => {
// //     res.find().toArray().then((data) => {
// //         console.log(data);
// //     });
// // })

// const main = async () =>{
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();


/// Video - 33 ==> Insert Data in MongoDB

const dbConnection = require('./mongodb');

