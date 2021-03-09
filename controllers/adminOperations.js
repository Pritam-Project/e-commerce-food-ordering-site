const router = require('express').Router();
const UUID = require('uuid-int');
const id = 0;
let AdminFoodAddModel = require('../models/restaurant_food_model.js');

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


//get posters
 
router.route('/foods/:foodOwner').post((req , res) =>{
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