module.exports = function(app){
    const product = require("../controllers/product.controller");
    app.post("/product", product.create);
    app.get("/products", product.findAllProducts)
};