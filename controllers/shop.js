const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render('shop/product-list', {
                prods: rows,
                pageTitle: 'All Products',
                path: '/products',
            })
        })
        .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
    const prodID = req.params.productID;
    Product.findById(prodID)
        .then(([product]) => {
            res.render('shop/product-detail', {
                product: product[0],
                pageTitle: product[0].title,
                path: '/products'
            });
        })
        .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('shop/index', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            })
        })
        .catch(err => console.log(err));
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProduct = [];
            for (product of products){
                const cartProductData = cart.products.find(prod => prod.id === product.id)
                if (cartProductData){
                    cartProduct.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProduct
            })
        })
    });
}

exports.postCart =  (req, res, next) => {
    const prodID = req.body.productID;
    Product.findById(prodID, (product) => {
        Cart.addProduct(prodID, product.price);
    })
    res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
    const prodID = req.body.productId;
    Product.findById(prodID, product => {
        Cart.deleteProduct(prodID, product.price)
        res.redirect('/cart')
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',

    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/cart', {
        path: '/checkout',
        pageTitle: 'Checkout',

    })
}