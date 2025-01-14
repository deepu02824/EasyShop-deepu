const express = require('express');
const CartItemsController = require('../controllers/cart_item.controller');
const router = express.Router();

router.get('/', CartItemsController.getCartItem);

router.post('/create', CartItemsController.createCartItem);

router.delete('/deleteall/:cartid', CartItemsController.deleteAllCartItems);

router.delete('/delete/:id', CartItemsController.deleteCartItem);

router.patch('/update/:id', CartItemsController.updateCartItem);

module.exports = router;
