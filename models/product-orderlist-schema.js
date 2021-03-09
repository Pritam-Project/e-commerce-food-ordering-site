const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productAddtoOrderlist = new Schema({
    customarname: {type: String},
    customaremailid: {type: String},
    customarphone: {type: String},
    customaraddress: {type: String},
    customarpin: {type : String},
    foodowner: {type: String},
    foodowneremail:{type: String},
    orderid: {type: String},
    foodid : { type: String },
    foodcat: {type: String},
    foodname : {type: String },
    fooddesc: {type: String },
    foodprice : {type: Number },
	foodquantity: {type: Number},
    foodPicture: {type: String },
    
},
{
    timestamps: true,
});

const OrderListProduct = mongoose.model('orderlist', productAddtoOrderlist);
module.exports = OrderListProduct;