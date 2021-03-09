// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let RestaurantModel = model_mongoose.model('Food', 
{
    restfoodid: {type: String},
    foodowner: {type: String},
    foodowneremail:{type: String},
    restfoodcat: {type: String},
    restfoodspe: { type: String },
    restfooddes: { type: String },
    restfoodcost: {type: String},
    restfoodfile: {type: String},
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Designer using BINDING
module.exports = RestaurantModel ;
