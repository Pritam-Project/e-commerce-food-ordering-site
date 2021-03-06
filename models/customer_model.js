// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let EmployeeModel = model_mongoose.model('user_model_collection', 
{
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    emppass: { type: String },
    empcountry: { type: String },
    empaddress: { type: String },
    emppin: { type: String },
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Employee using BINDING
module.exports = EmployeeModel ;
