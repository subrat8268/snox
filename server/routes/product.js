import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific product by id
router.get('/:productId', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res
                .status(404)
                .send({ error: 'product entry not found' });
        }
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title,
            desc: req.body.desc,
            photo: req.body.photo,
            category: req.body.category,
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update an existing user
router.patch('/:productId', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body);
        if (!product) {
            return res.status(404).send({ error: 'product entry not found' });
        }
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: 'Invalid input data' });
    }
});


// Delete a Leave detail entry for an user
router.delete('/:productId', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId);
        if (!product) {
            return res.status(404).send({ error: 'Product detail not found' });
        }

        res.send({ message: "Details deleted successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});


export default router;