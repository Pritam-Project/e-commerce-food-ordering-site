// IMPORT EXPRESS SERVER

const express = require('express');
// USE Router FOR EXPRESS SERVER
const router = express.Router();

const bcrypt = require('bcrypt');
const randomize = require('randomatic');
const mailservice = require('../services/mailService.js');



//IMPORT EMPLOYEE MODEL AND BIND IT
const RestModel = require('../models/restaurant_model');
//const EmpModel = require('../models/employee_schema');

router.post('/regpasswordencrypt/restaurant', (req, res) => {
  let encryp_pass = ''
  
  bcrypt.hash(req.body.restpass, 10)
    .then((encpass) => {

      const restobj = new RestModel({
        restname: req.body.restname,
        restemail: req.body.restemail,
        restmobile: req.body.restmobile,
        restpass: encpass,
        restcountry: req.body.restcountry,
        restaddress: req.body.restaddress,
        about:req.body.about,
      });
      restobj.save()
        .then(inserteddocument => {
          mailservice.sendmail(req.body.restemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION');
          res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
        })//CLOSE THEN
        .catch(err => {
          res.status(500).send({ message: err.message || 'Error in Employee Save ' })
        });//CLOSE CATCH
    }//CLOSE  bcrypt then body
    );//CLOSE bcrypt then method
});//CLOSE Post Method

//for login to check password
router.post('/logincheck/a/restaurant', (req, res) => {


  //var inp = bcrypt.hash(req.body.emppass, 10)

  RestModel.find({ "restemail": req.body.restemail })
    .then(getsearchdocument => {

      if (getsearchdocument.length > 0) {
        
        let enteredpassword = req.body.restpass
        let storedpassword = getsearchdocument[0].restpass
        
        bcrypt.compare( enteredpassword, storedpassword ).then((data) => {

          if(data === true)
          {
            res.send(getsearchdocument) 
          }

          else{
            res.send("fail");
             }       
        })

      }
      else {
        
        return res.status(404).send({ message: "Note not found with id " + req.body.restemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      console.log("vulval");
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.body.restemail });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD  




//UPDATE DOCUMENT IN MONGODB USING EMAILID
//for update password (this is for d_newpassword page)
router.put('/update/pass/restaurant', (req, res) => 
            {
               bcrypt.hash(req.body.restpass,10).then((encpass) =>{
                RestModel.findOneAndUpdate({"restemail": req.body.restmail}, 
                { $set: {"restpass" : encpass}}, { new: true })
.then(getupdateddocument => {
  
    if (getupdateddocument != null)
      res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);
    else
      res.status(404).send('INVALID REQEST ID ');

}) // CLOSE THEN
.catch(err => {
return res.status(500).send({message: "DB Problem..Error in UPDATE with id "} );
}) // CLOSE CATCH
                
               })

  
                            } //CLOSE CALLBACK FUNCTION Line No 108
                            ); //CLOSE PUT METHOD Line No 107


//this is for forgot_pass page to send otp in mail
router.post('/resetpass/restaurant', (req, res) => {
 
  
  //console.log(req.body.emppass)
  RestModel.find({ "restemail": req.body.restemail })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        
        
              r = randomize('0', 4) //will generate a 4-digit random number
              mailservice.sendmail(req.body.restemail, 'YOUR OTP', r);
              console.log(r);
              getsearchdocument[1] = r
              res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with id  " + req.body.restemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.body.restemail });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD  


//get single restaurant
 
router.route('/restaurant/:emailid').get((req , res) =>{
  RestModel.find({restemail : req.params.emailid})
          .then(getsearchdocument => {
            if(getsearchdocument.length >0) 
            {
              res.send(getsearchdocument);
            }
            else
            {
return res.status(404).send({message: "Note not found with id " + req.params.adminid });
            }
        }) 
          .catch( err => {
return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.adminid });           
          })
        }
       ); 

//SHOULD BE EXPORTED
module.exports = router;