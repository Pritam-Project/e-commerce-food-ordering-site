// IMPORT MONGOOSE 
const model_mongoose = require('mongoose');

//CREATE MODEL Employee means Employee Information
let EmployeeModel = model_mongoose.model('contact_us_collection', 
{
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empmessage: { type: String },
	regdatetime: { type: Date, default: Date.now }
});

//EXPORT MODULE Employee using BINDING
module.exports = EmployeeModel ;
