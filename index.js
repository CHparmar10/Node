/// Video - 39,40  ==> Mongoose with node // Crud Operation using Mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-commerce");

const ProductSchemas = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDB = async () =>{
    

    const ProductsModel = mongoose.model("products",ProductSchemas);
    let data = new ProductsModel({name:"V Pro 5G",brand:'Vivo',price:1500,category:'mobile'});
    let result = await data.save();

    console.log(result);
}

//saveInDB()

const updateInDB = async () => {
    const Product = mongoose.model("products",ProductSchemas);
    let data = await Product.updateOne(
        { name: "i phone 12"},
        {
            $set:{ price: 700,name:"i phone 11" }
        }
    );
    console.log(data);
}

//updateInDB();


const deleteInDB = async () => {

    const Product = mongoose.model("products",ProductSchemas);
    let data = await Product.deleteOne({name:'m8'});
    console.log(data);

};

//deleteInDB();

const findinDB = async () =>{
    const Product = mongoose.model("products",ProductSchemas);
    let data = await Product.find({name:"m8"});
    console.log(data);
}


findinDB();

