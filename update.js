/// video - 33 ==> Update Data in MongoDB

const dbConnection = require('./mongodb');

const updateData = async () => {
    let data = await dbConnection();
    let result = data.updateOne(
        {
            name: 'note 5'
        }, {
        $set: { name: 'max pro 51',price:5640 }
    });
    console.warn(result);
}


updateData();