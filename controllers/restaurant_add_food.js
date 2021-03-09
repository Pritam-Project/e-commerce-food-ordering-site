// IMPORT EXPRESS SERVER
const express = require('express');

const UUID = require('uuid-int');
const id = 0;
// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const RestModel = require('../models/restaurant_food_model.js');

// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda 
router.post('/add', (req, res) => 
                 { 
                  const generator = UUID(id);
                  const proid = generator.uuid();   
                  
//Create Object of Employee Model Class
// And Receive value from request body and Store value within the Object
                   const restobj = new RestModel({
                     restfoodid: proid,
                     foodowner: req.body.foodowner,
                     foodowneremail: req.body.foodowneremail,
                     restfoodcat: req.body.restfoodcat,
                     restfoodspe: req.body.restfoodspe,
                     restfooddes: req.body.restfooddes,
                     restfoodcost: req.body.restfoodcost,
                     restfoodfile: req.body.restfoodfile,
                                 });//CLOSE EmpModel
     //INSERT/SAVE THE RECORD/DOCUMENT
                   restobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Save Product '})
                               });//CLOSE CATCH
                            }//CLOSE CALLBACK FUNCTION BODY Line 27
                            );//CLOSE POST METHOD Line 26

router.delete('/remove/:restfoodid', (req, res) =>
            {
  RestModel.findOneAndRemove({"restfoodid" : req.params.restfoodid})
          .then( deleteddocument => { 
            if(deleteddocument != null)
            {  
  res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }  
            else
            {
  res.status(404).send('INVALID EMP ID '+ req.params.empid); 
            }
          }) //CLOSE THEN
          .catch( err => {
 return res.status(500).send({message: "DB Problem..Error in Delete with id " + req.params.empid });          
          })//CLOSE CATCH
             }//CLOSE CALLBACK FUNCTION BODY Line 60
            ); //CLOSE Delete METHOD Line 59


// // localhost:4500/emp/10
// //SEARCH EMPLOYEE BY EMPID
// // "empid" : parseInt(req.params.empid) Convert empid String to Int
// // EmpModel.find({"empid" : parseInt(req.params.empid)})

// // localhost:4500/emp/abc@gmail.com
// //SEARCH EMPLOYEE BY EMPEMAIL
// // CALLBACK function for get method using lambda 
router.get('/search/:restfoodid', (req, res) => 
            {
      RestModel.find({"restfoodid" : req.params.restfoodid})
            .then(getsearchdocument => {
              if(getsearchdocument.length >0) 
              {
                res.send(getsearchdocument);
              }
              else
              {
  return res.status(404).send({message: "Note not found with id " + req.params.empid });
              }
          }) //CLOSE THEN
            .catch( err => {
  return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.empid });           
            })//CLOSE CATCH
          }//CLOSE CALLBACK FUNCTION BODY Line 88
         );//CLOSE GET METHOD Line 87 

// BROWSER URL :- localhost:4500/des
// get IS USED FOR FETCHING DOCUMENTS FROM MONGODB
// CALLBACK using lambda 
router.get('/:email', (req, res) => 
                {
                RestModel.find({"foodowneremail" : req.params.email })
                          .then( getalldocumentsfrommongodb => {
    res.status(200).send(getalldocumentsfrommongodb);
                          }) //CLOSE THEN
                          .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Fetch Employee '})
                          });//CLOSE CATCH
                } //CLOSE CALLBACK FUNCTION BODY Line 110      
          );//CLOSE GET METHOD Line 109  


//UPDATE DOCUMENT IN MONGODB USING EMAILID
router.put('/update', (req, res) => 
            {
  RestModel.findOneAndUpdate({"restfoodid" : req.body.restfoodid}, 
                              { $set: {"restfoodcat" : req.body.restfoodcat,
                                "restfoodspe":req.body.restfoodspe,
                              "restfooddes": req.body.restfooddes,
                              "restfoodcost": req.body.restfoodcost,
							  "restfoodfile": req.body.restfoodfile
							  } }, { new: true })
          .then(getupdateddocument => {
            if(getupdateddocument != null)
               res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
            else
               res.status(404).send('INVALID ID '+ req.params.id);
          }) // CLOSE THEN
          .catch(err => {
  return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.id });
          }) // CLOSE CATCH
                            } //CLOSE CALLBACK FUNCTION Line No 108
                            ); //CLOSE PUT METHOD Line No 107




//SHOULD BE EXPORTED
module.exports = router;