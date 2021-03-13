// IMPORT EXPRESS SERVER
const express = require('express');
// USE Router FOR EXPRESS SERVER
const router = express.Router();

const bcrypt = require('bcrypt');
const randomize = require('randomatic');
const mailservice = require('../services/mailService.js');



//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/customer_model');
//const EmpModel = require('../models/employee_schema');

// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/regpasswordencrypt', (req, res) => {
  let encryp_pass = ''
  //console.log(req.body.emppass)
  bcrypt.hash(req.body.emppass, 10)
    .then((encpass) => {

      const empobj = new EmpModel({
        empname: req.body.empname,
        empemail: req.body.empemail,
        empmobile: req.body.empmobile,
        emppass: encpass,
        empcountry: req.body.empcountry,
        empstate: req.body.empstate,
        empaddress: req.body.empaddress,
        about:req.body.about,
      });
      empobj.save()
        .then(inserteddocument => {
          mailservice.sendmail(req.body.empemail, 'REGISTRATION SUCCESSFUL', 'THANK YOU FOR REGISTRATION');
          res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
        })//CLOSE THEN
        .catch(err => {
          res.status(500).send({ message: err.message || 'Error in Employee Save ' })
        });//CLOSE CATCH
    }//CLOSE  bcrypt then body
    );//CLOSE bcrypt then method
});//CLOSE Post Method


router.post('/logincheck/a', (req, res) => {
  //console.log(req.body.empemail)
  //console.log(req.body.emppass)

  //var inp = bcrypt.hash(req.body.emppass, 10)

  EmpModel.find({ "empemail": req.body.empemail })
    .then(getsearchdocument => {

      if (getsearchdocument.length > 0) {
        
        console.log(getsearchdocument[0].emppass)
        let enteredpassword = req.body.emppass
        let storedpassword = getsearchdocument[0].emppass
        //console.log("storedpass"+storedpassword)
        //console.log("enteredpassword"+enteredpassword)

        bcrypt.compare( enteredpassword, storedpassword ).then((pass) => {

          if(pass === true)
          {
            res.send(getsearchdocument) 
          }

          else{
            res.send("fail");


          }       
        
        })


        // bcrypt.compare(enteredpassword, storedpassword)
        //   .then(result => {
        //     console.log(result)
        //     if (result == true) {
        //       //console.log("MATCHED");
        //      /* r = randomize('0', 4) //will generate a 4-digit random number
        //       mailservice.sendmail(req.body.empemail, 'YOUR OTP', r);
        //       console.log(r)
        //       getsearchdocument[1] = r*/
        //       res.send(getsearchdocument); 
        //     }
        //     else
        //       res.send("not");
        //   })
      }
      else {
        return res.status(404).send({ message: "Note not found with id " + req.params.empid });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD  

router.get('/search/:empemail', (req, res) => {
  EmpModel.find({ "empemail": req.params.empemail })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "No Record Found " + req.params.empemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with song name " + req.params.foodname });
    })//CLOSE CATCH
}
);



// router.put('/new/pass' , (req,res) =>{
  
//   console.log("my email"+req.body.empmail)
//   console.log("my pass"+req.body.emppass)
  
//   EmpModel.findOneAndUpdate({"empemail": req.body.empmail}, {$set: {"emppass" : req.body.emppass}}, {new: true})
//   .then(getupdateddocument => {
//     if (getupdateddocument != null)
//       res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);
//     else
//       res.status(404).send('INVALID REQEST ID ' + a);
//             }) // CLOSE THEN
//     .catch(err => {
//         return res.status(500).send({ message: "DB Problem..Error in UPDATE with id " + req.body.empemail });
//           })
//   })

//get single customer
 
router.route('/customer/:emailid').get((req , res) =>{
  EmpModel.find({empemail : req.params.emailid})
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


//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put('/update/pass/', (req, res) => 
            {
               bcrypt.hash(req.body.emppass,10).then((encpass) =>{
                EmpModel.findOneAndUpdate({"empemail": req.body.empmail}, 
                { $set: {"emppass" : encpass}}, { new: true })
.then(getupdateddocument => {
  console.log(getupdateddocument)
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



// });



//SHOULD BE EXPORTED
router.post('/logincheck/resetpass/', (req, res) => {
  console.log('Hello there');
  console.log(req.body.empemail)
  //console.log(req.body.emppass)
  EmpModel.find({ "empemail": req.body.empemail })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        
        
              r = randomize('0', 4) //will generate a 4-digit random number
              mailservice.sendmail(req.body.empemail, 'YOUR OTP', r);
              console.log(r)
              getsearchdocument[1] = r
              res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with id  " + req.body.empemail });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.body.empemail });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD  


//SHOULD BE EXPORTED
module.exports = router;