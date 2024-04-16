const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shares-messages:shares-messages@karanxidhu.glotklc.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async()=>{
    await mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
