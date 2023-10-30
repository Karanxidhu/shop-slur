const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

router.get('/dec/:id', fetchuser ,async(req,res)=>{
    const product_id = req.params.id;
    try {
        const existingCart = await Cart.findOne({ user: req.user.id })
        const product = await Product.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "product is not available" })
        }else if(existingCart){
            const existingProduct = await Cart.find({
                user: req.user.id,
                "items.product_id": product_id
            })
            if (existingProduct.length !=0) {
                const cartProduct = await Cart.updateOne({
                    user: req.user.id,
                    "items.product_id": product_id
                }, {
                    $inc: { "items.$.quantity":-1 }
                })
                res.send({ cartProduct })
            }
        }
    } catch (error) {
        
    }
})

router.put('/addproduct/:id', fetchuser, async (req, res) => {
    const product_id = req.params.id;
    try {
        const existingCart = await Cart.findOne({ user: req.user.id })
        const product = await Product.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: "product is not available" })
        }
        else if (existingCart) {
            const existingProduct = await Cart.find({
                user: req.user.id,
                "items.product_id": product_id
            })
            if (existingProduct.length !=0) {
                const cartProduct = await Cart.updateOne({
                    user: req.user.id,
                    "items.product_id": product_id
                }, {
                    $inc: { "items.$.quantity": 1 }
                })
                res.send({ cartProduct })
            }else{
                const cartProduct = await Cart.updateOne({
                    user: req.user.id
                },{
                    $push:{"items":[{product_id: product_id, quantity: 1}]}
                })
                res.send({cartProduct})
            }
            
        }
        else {
            const cart = new Cart({
                user: req.user.id,
                items: [
                    {
                        product_id: product_id,
                        quantity: 1
                    }
                ]
            })
            const savedCart = await cart.save();
            console.log(savedCart)
            res.json(savedCart)
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/',fetchuser, async(req,res)=>{
    const userCart = await Cart.findOne({ user: req.user.id });
    try {      
        if(userCart){
            res.send({userCart})
        }else{
            res.status(404).send({message:"Cart not found"})
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router