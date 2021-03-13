const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoCart = new Schema({
    foodid : { type: String },
    useremail: {type:String},
    foodcat: {type: String},
	cartfoodid: {type: String},
    foodowner: {type: String},
    foodowneremail:{type: String},
    foodname : {type: String },
    fooddesc: {type: String },
    foodprice : {type: Number },
    foodPicture: {type: String },
    foodquantity: {type: Number },
},
{
    timestamps: true,
});

const CartProduct = mongoose.model('cartproducts', productAddtoCart);
module.exports = CartProduct;