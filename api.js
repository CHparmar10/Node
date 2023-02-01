// Video - 41,42,43,44 ==> project level apis

const express = require("express");
require('./config');
const product = require('./product');
const app = express();

app.use(express.json())

app.post('/create',async (req,res)=>{    
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});


app.get("/list",async(req,res)=>{
    let data = await product.find();
    res.send(data);
});


app.delete("/delete/:_id",async(req,res)=>{
    let data = await product.deleteOne(req.params);
    res.send(data);
});


app.put("/update/:_id",async(req,res)=>{
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {$set:req.body}
        )
});


app.get("/search/:key",async(req,res)=>{
    console.log(req.params.key);
    let data = await product.find({
        "$or":[{
            "name":{$regex:req.params.key},
            "brand":{$regex:req.params.key},
            "category":{$regex:req.params.key}
        }]
    })
    res.send(data);
})


/// Video - 44 ==> Using Multer package doing file upload process.


app.listen(4300);