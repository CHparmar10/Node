/// video - 32 ==> Update Data in MongoDB

const dbConnection = require('./mongodb');

const insert = async () => {
    //console.log("insert function");
    const db = await dbConnection();
    const result = await db.insert(
        [
            {name:'max 1',brand:'Micromax',price:1200,category:'mobile'},
            {name:'max 2',brand:'Micromax',price:1580,category:'mobile'},
            {name:'max 5',brand:'Micromax',price:1700,category:'mobile'}
        ]
    );
    console.log(result);
}

insert();