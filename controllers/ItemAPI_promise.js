// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

//IMPORT EMPLOYEE MODEL AND BIND IT
const ItmModel = require('../models/restaurant_food_model');

 
 
router.get('/searchbyfoodname/:foodname', (req, res) => {
  ItmModel.find({ "restfoodspe": req.params.foodname })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Note not found with song name " + req.params.foodname });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with song name " + req.params.foodname });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY Line 64
);//CLOSE GET METHOD Line 63 


router.route('/searchbycatagory/:catagory').get((req, res)=>{
  ItmModel.find({"restfoodcat": req.params.catagory})
  .then(food =>{
    if(food.length>0)
	{
    res.send(food);
	}
else{
	res.send('Doesn\'t exist');
}
  })
  .catch(err=>{
	  console.log("db problem");
    //res.status(500).send({ message: "DB Problem..Error in Retriving " });
  })
});




router.get('/search/:lprz/:uprz', (req, res) => {
  
  ItmModel.find({ "restfoodcost":{$gte:req.params.lprz, $lte:req.params.uprz} })
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "not found with prize range " + req.params.foodname });
      }
    }) //CLOSE THEN
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with prize range " + req.params.foodname });
    })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY Line 64
);//CLOSE GET METHOD Line 63


//SHOULD BE EXPORTED
module.exports = router;