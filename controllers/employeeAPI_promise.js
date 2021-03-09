// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/contact_model');

const mailservice = require('../services/mailService');
// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/contactus', (req, res) => 
                 {
                    
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const empobj = new EmpModel({
                                 empname: req.body.empname,
                                 empemail: req.body.empemail,
                                 empmobile: req.body.empmobile,
                                 empdob: req.body.empmessage,
                                
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   const currentDateTime = new Date();
                  const details = "\nName :"+req.body.empname+"\nEmail Address :"+req.body.empemail+"\nMobile No :"+req.body.empmobile+"\nMessage :"+req.body.empmessage+"\n"+currentDateTime;
                  empobj.save().then(inserteddocument => {
                                const adminmail ="gmit.poster@gmail.com";
                                console.log("Admin Mail:"+adminmail);
	                              mailservice.sendmail(adminmail, 'Contact Us Email', details);
                                res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument );
                               }).catch(err =>{
                                    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26


//SHOULD BE EXPORTED
module.exports = router;