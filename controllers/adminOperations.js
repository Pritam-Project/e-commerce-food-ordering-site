const router = require('express').Router();
const UUID = require('uuid-int');
const id = 0;
let AdminFoodAddModel = require('../models/restaurant_food_model.js');
let RestaurantModel = require('../models/restaurant_model.js');
let CustomerModel = require('../models/customer_model.js');

//add poster by admin
router.route('/addfood').post((req,resp) =>{
	console.log("a");
	const generator = UUID(id);
    const admid = generator.uuid();
    const AdminFoodAdd = new AdminFoodAddModel({
        restfoodid: admid,
        foodowner: "ADMIN",
        foodowneremail: req.body.adminemail,
        restfoodcat: req.body.catagory,
        restfoodspe: req.body.foodSpecification,
        restfooddes: req.body.foodDescription,
        restfoodcost: req.body.foodPrice,
        //food: req.body.food

    });

    AdminFoodAdd.save().then(
	(data)=>{resp.send(data)}).catch((e)=> console.log(e))



})


//get foods by food owner
 
router.route('/foods/:foodOwner').get((req , res) =>{
    AdminFoodAddModel.find({ foodowner: req.params.foodOwner}, function (err, docs){ 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log("First function call : ", docs); 
            res.json(docs);

        } 
    }); 
    
});

//get all food
 
router.route('/allfoods').get((req , res) =>{
    AdminFoodAddModel.find()
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


//food delete by mongoid
router.route('/fooddelete/:id').delete((req,res) =>{
    AdminFoodAddModel.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//searchbu adminid

router.post('/search/:adminid', (req, res) =>  
            {
            AdminFoodAddModel.find({"restfoodid" : req.params.adminid})
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



         //get single restaurant
 
router.route('/restaurant/:emailid').get((req , res) =>{
  RestaurantModel.find({restemail : req.params.emailid})
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


//get single customer
 
router.route('/customer/:emailid').get((req , res) =>{
  CustomerModel.find({empemail : req.params.emailid})
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

//get all restaurant
 
router.route('/allrestaurant').get((req , res) =>{
  RestaurantModel.find()
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


//get all coustomer

router.route('/allcustomer').get((req , res) =>{
  CustomerModel.find()
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

 //restaurant delete by mongoid
router.route('/restaurantdelete/:id').delete((req,res) =>{
  RestaurantModel.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//customer delete by mongoid
router.route('/customerdelete/:id').delete((req,res) =>{
  CustomerModel.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//updatebyadminid

router.put('/food/update', (req, res) => 
         {
            AdminPosterAddModel.findOneAndUpdate({"restfoodid" : req.body.adminid}, 
                           { $set: {"restfoodspe":req.body.foodSpecification,
                           "restfooddes": req.body.foodDescription,
                           "restfoodcost": req.body.foodPrice,
                           "restfoodcat":req.body.catagory
                           } }, { new: true })
       .then(getupdateddocument => {
         if(getupdateddocument != null)
            res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);  
         else
            res.status(404).send('INVALID ID '+ req.params.id);
       }) 
       .catch(err => {
return res.status(500).send({message: "DB Problem..Error in UPDATE with id " + req.params.id });
       }) 
                         } 
                         ); 
module.exports = router