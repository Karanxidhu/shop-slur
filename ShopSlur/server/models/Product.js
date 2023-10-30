const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    images:{
        type: Array,
        default: []
    },
    price:{
        type: Number,
        default: 0,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    review:{
        type: Number,
        default:0
    }
  });

  module.exports = mongoose.model('products', ProductSchema);