const model_mongoose = require('mongoose');
//const autoincrement = require("mongoose-auto-increment");

let PosterOrderModel = model_mongoose.model('food_order_model_collection',
{
     requestid : {type: Number},
    // requestid :sgetNextSequence('user_id'),
    foodid: {type: String},
    foodname: {type: String},
    customeremail: {type: String},
    customername: {type: String},
     orderdatetime: { type: Date, default: Date.now },
    // delivery_date : {type: String},
    status:{type: String, default: "REQUESTED"}
});


module.exports= PosterOrderModel;