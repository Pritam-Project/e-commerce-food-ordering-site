const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoWishlist = new Schema({
    foodid : { type: String },
    useremail: {type:String},
    foodcat: {type: String},
    foodname : {type: String },
    foodowner: {type: String},
    foodowneremail:{type: String},
    fooddesc: {type: String },
    foodprice : {type: Number },
    foodPicture: {type: String },
    
},
{
    timestamps: true,
});

const WishListProduct = mongoose.model('wishlist', productAddtoWishlist);
module.exports = WishListProduct;