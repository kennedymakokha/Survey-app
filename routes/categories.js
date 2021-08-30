const express = require('express');
const Category = require('./../models/category');

var isAuth = require('./../utilities/auth');
var { validateCategoryInput } = require('./../validations/categoriesValidation')

const categoryRoute = express.Router();

categoryRoute.post('/category', isAuth, async (req, res) => {
    try {
        const data = req.body

        const Exists = await Category.findOne({ title: req.body.title })
        const { errors, isValid } = validateCategoryInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        if (Exists) {
            res.status(401).send({ message: `${req.body.title} is already in the system` });
        }
        data.createdBy = req.user._id
        const categor = new Category(data);
        const createdCatgory = await categor.save();
        res.status(200).send(createdCatgory);
    } catch (error) {
        console.log(error)
    }
})


categoryRoute.get('/categories', async (req, res) => {
    const categories = await Category.find().populate('createdBy');
    if (categories) {
        res.status(200).send(categories);
    } else {
        res.status(404).send({ message: 'categories Not Found' });
    }
})
    ;


module.exports = categoryRoute
