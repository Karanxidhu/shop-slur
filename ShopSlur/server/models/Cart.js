const mongoose = require('mongoose');
const { Schema } = mongoose;

const items = new Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    quantity:{
        type: Number,
        default: 0
    }
})

const CartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    items:[items]
    
})
module.exports = mongoose.model('carts', CartSchema);