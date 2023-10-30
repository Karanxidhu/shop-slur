const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallproducts', fetchuser, async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/fetchproduct/:id', async (req, res) => {
    try {
        const products = await Product.find({_id:req.params.id});
        res.json(products)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
router.get('/fetchproductseller',fetchuser, async (req, res) => {
    try {
        const products = await Product.find({user:req.user.id});
        res.json(products)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addproduct', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('price', 'Must contain a price').exists()
    ], async (req, res) => {
        const user = await User.findById(req.user.id).select("-password")
        try {
        if(user.role == 'SE'){
                const { title, description, tag, images, price } = req.body;
    
                // If there are errors, return Bad request and the errors
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                const product = new Product({
                    title, description, tag, images, price, user: req.user.id
                })
                const savedProduct = await product.save()
    
                res.json(savedProduct)
    
            }else{
                res.status(400).send("please create a seller sccount for publishing product");
            }
            } catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
    })

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateproduct/:id', fetchuser, async (req, res) => {
    const { title, description, tag, images, price } = req.body;
    try {
        // Create a newProduct object
        const newProduct = {};
        if (title) { newProduct.title = title };
        if (description) { newProduct.description = description };
        if (tag) { newProduct.tag = tag };
        if (price) { newProduct.price = price };
        if (images) { newProduct.images = images};

        // Find the note to be updated and update it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteproduct/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router