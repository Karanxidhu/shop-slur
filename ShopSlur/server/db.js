const mongoose = require('mongoose');

const mongoURI = "ADD YOU CONNECTION STRING"

const connectToMongo = async()=>{
    await mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
