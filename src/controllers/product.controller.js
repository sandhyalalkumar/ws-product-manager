const url = require("url");
const Product = require("../models/product.model");

exports.create = function(req, res){
    if(!req.body.title) {
        return res.status(400).send({
            message: "Product title can not be empty."
        });
    }

    const product = new Product({
        title: req.body.title, 
        id: req.body.id,
        provider: req.body.provider,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        details: req.body.details
    });

    product.save()
    .then(function(data){
        res.send(data);
    }).catch(function(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the product."
        });
    });
};

exports.findAllProducts = function(req, res){
    Product.find()
    .then(function(products){
        res.send(products);
    }).catch(function(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

