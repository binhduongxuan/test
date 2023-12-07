const Product = require("../models/product");

exports.getAddProduction = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        activeAddProduct:true,
        productCSS: true
    });
}

exports.postAddProduction = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    });
}
