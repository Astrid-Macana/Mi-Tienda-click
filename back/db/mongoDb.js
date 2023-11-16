const mongoose = require('mongoose')

mongoose.Connection.on("open",()=> console.log('DB connected'))

async function connectDb({host,port,dbName}) {
    const uri = `mongodb://${host}:${port}/${dbName} `;
    await mongoose.connect(uri,{useNewUrlParser:true})

}
module.exports = connectDb
