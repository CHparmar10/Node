/// Video - 34 ==> Delete Records in mongoDB

const dbConnection = require('./mongodb');

const DeleteData = async () => {
    let data = await dbConnection();
    
    //console.log("function called");
    //console.log(data);

    let result = await data.deleteMany({name:'max 5'});
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("record deleted");
    }
}

DeleteData();