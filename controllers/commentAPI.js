
const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comments_model');


//POST
router.post('/posts', (req, res) => {

  
  const userobj = new CommentModel({
    category:req.body.category,
    subject: req.body.subject,
    comment: req.body.comment,
    name:req.body.name,
    country:req.body.country

  });
  userobj.save()
    .then(inserteddocument => {
      res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Comment Save ' })
    });
}
);

 
router.get('/viewall', (req, res) => {
  CommentModel.find().sort({commentdatetime:-1})
    .then(getalldocumentsfrommongodb => {
      res.status(200).send(getalldocumentsfrommongodb);
    }) 
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error in Fetch Comments ' })
    });
}  
);


router.get('/search/:category', (req, res) => {
  
  CommentModel.find({ "category": req.params.category})
    .then(getsearchdocument => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      }
      else {
        return res.status(404).send({ message: "Comment not found with id " + req.params.userid });
      }
    })
    .catch(err => {
      return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.userid });
    })
}
);



module.exports = router;