//wishlist Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,ref:'users'
    },
    productsId: Array(String)
});
const Wishlist = mongoose.model('wishlista', wishlistSchema);

module.exports = Wishlist;

//Example usage:
