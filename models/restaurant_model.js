// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let RestaurantModel = model_mongoose.model('restaurant_model_collection', 
{
    restname: { type: String },
    restemail: { type: String },
    restmobile: { type: String },
    restpass: { type: String },
    restcountry: { type: String },
    restaddress: { type: String },
    about:{type:String},
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE RestaurantModel using BINDING
module.exports = RestaurantModel ;
