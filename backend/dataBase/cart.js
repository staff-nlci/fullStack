//Cart Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,ref:'users'
    },
    productsId: Array(String)
});
const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;