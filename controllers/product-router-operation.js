const router = require('express').Router();
let RestaurantModel = require('../models/restaurant_food_model');
let CartProduct = require('../models/product-cart-model');
let WishListProduct = require('../models/product-wishlist-model')
let OrderListProduct = require('../models/product-orderlist-schema')
const mailservice = require("../services/mailService")
const UUID = require('uuid-int');;
const id = 0;
// ADD TO CART FROM HOMEPAGE AND WISHLIST PAGE
// getting data from designermodel(HOMEPAGE) by id and checking from cartmodel that the value is pe exists or not. id the value
// is not present then create new to cart product elseif value pre exists then simpls findoneand update
// While sending values from wishlist to cart it is checking from homepage model and same logic implementing and deleteing from wishlist
router.route('/cart').post((req,res) =>{
    RestaurantModel.findById(req.body.addtocartid).then((pdt) => {
        const foodname = pdt.restfoodspe;
        const foodcat = pdt.restfoodcat;
        const cartfoodid = pdt.restfoodid;
        const foodid = req.body.addtocartid;
        const fooddesc = pdt.restfooddes;
        const foodprice = pdt.restfoodcost;
        const foodowner = pdt.foodowner;
        const foodowneremail = pdt.foodowneremail;
        const date = pdt.regdatetime; 
        const useremail = req.body.cartuseremail;
        const foodPicture = pdt.restfoodfile;
        const foodquantity = 1;
        res.json('Products !'+pdt);

        const myp = Number(foodprice);
        CartProduct.find({"foodid" : req.body.addtocartid}).then((data) => {
            console.log("Hello");
            console.log(data);
            if(data.length === 0)
            {
                console.log("First Insert");
                const addtocart = new CartProduct({
                    foodid,
                    useremail,
                    foodowner,
                    foodowneremail,
                    foodcat,
                    cartfoodid,
                    foodname,
                    fooddesc,
                    foodprice,
                    date,
                    foodPicture,
                    foodquantity
        
                });
        
                addtocart.save().then(inserteddocument=> {
                    mailservice.sendmail(useremail, 'FOOD ADDED TO YOUR CART SUCCESSFUL', 'THANK YOU FOR ADD NEW FOOD'+ inserteddocument);
                    // res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                    console.log("successfull")})
                    .catch((e)=> console.log(e));
            }

            else
            {
                console.log("Already Present");
                console.log(data[0].foodquantity);

                // Quantity and price Calculation
                const foodquantityy = data[0].foodquantity + 1 ;
                const foodpricee = data[0].foodprice+myp;

                CartProduct.findOneAndUpdate({"foodid" : req.body.addtocartid}, 
                { $set: {"foodquantity":foodquantityy,
                        "foodprice" : foodpricee
                
                } }, { new: true }).then(() => {
                    mailservice.sendmail(req.body.cartuseremail, 'FOOD ADDED TO YOUR CART SUCCESSFUL', 'THANK YOU FOR ADD NEW FOOD');
                    console.log("success"+foodquantityy)});
                

            }
        })

       
    })
    .catch(err => res.status(400).json('Error: ' + err));
        
    
});


// DISPLAY PRODUCTS IN CART PAGE
router.route('/carts/mycart/:useremail').get((req , res) =>{
    CartProduct.find({"useremail":req.params.useremail})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});


// DISPLAY PRODUCTS IN CART PAGE
router.route('/carts/mycart/search/:cartfoodid').get((req , res) =>{
    CartProduct.find({"cartfoodid":req.params.cartfoodid})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/carts/removeone/:id').get((req, res) =>{
        CartProduct.find({"foodid" : req.params.id}).then((data) => {
            console.log("Removed");
            console.log(data);
      // Quantity and price Calculation
      const myp = Number(data[0].foodprice);
      const pqt = Number(data[0].foodquantity);
      console.log(myp);
      console.log(pqt);
      const price = (myp/pqt);
      const foodquantityy = data[0].foodquantity - 1 ;
      const foodpricee = data[0].foodprice - price;
    console.log(req.params.id)
    CartProduct.findOneAndUpdate({"foodid" : req.params.id}, 
    { $set: {"foodquantity":foodquantityy,
            "foodprice" : foodpricee
    
    } }, { new: true }).then(() => res.json('product removed.'));
      

});
})




// DISPLAY IN WISHLIST
router.route('/wishlist/mylist/:useremail').get((req , res) =>{
    WishListProduct.find({"useremail":req.params.useremail})
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});



// DISPLAY IN WISHLIST
router.route('/orderlist/order').get((req , res) =>{
    OrderListProduct.find()
    .then(crtpdts => res.json(crtpdts))
    .catch(err => res.status(400).json('Error: ' + err));
});




// Homepage to Wishlist Move
router.route('/wishlist').post((req,res) =>{
    RestaurantModel.findById(req.body.addtowishlistid).then((pdt) => {
        const foodname = pdt.restfoodspe;
        const foodcat = pdt.restfoodcat;
        const foodid = req.body.addtowishlistid;
        const useremail = req.body.wishuseremail;
        const fooddesc = pdt.restfooddes;
        const foodowner = pdt.foodowner;
        const foodowneremail = pdt.foodowner;
        const foodprice = pdt.restfoodcost;
        const date = pdt.regdatetime;
        const foodPicture = pdt.restfoodfile;
        res.json('Products !'+pdt);

        const addtowishlist = new WishListProduct({
            foodid,
            useremail,
            foodcat,
            foodowner,
            foodowneremail,
            foodname,
            fooddesc,
            foodprice,
            date,
            foodPicture
        });

        addtowishlist.save().then(inserteddocument=> {
            mailservice.sendmail(useremail, 'FOOD PLACED IN YOUR WISHLIST SUCCESSFUL', 'THANK YOU FOR CHOOSE THIS FOOD'+ inserteddocument);
            // res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
            
            console.log("successfull")})
            .catch((e)=> console.log(e));
    })
    .catch(err => res.status(400).json('Error: ' + err));
        
    
});

// Homepage to Orderlist Move
router.route('/orderlist').post((req,res) =>{

                const generator = UUID(id);
                const orderid = generator.uuid();

        const addtoorderlist = new OrderListProduct({
            customarname: req.body.customarname,
            customaremailid: req.body.customaremailid,
            customarphone: req.body.customarphone,
            customaraddress: req.body.customaraddress,
            customarpin: req.body.customarpin,
            foodowner: req.body.foodowner,
            foodowneremail:req.body.foodowneremail,
            orderid: orderid,
            foodid : req.body.foodid,
            foodcat: req.body.foodcat,
            foodname : req.body.foodname,
            fooddesc: req.body.fooddesc,
            foodprice : req.body.foodprice,
            foodquantity: req.body.foodquantity,
            foodPicture: req.body.foodPicture,
        });

        addtoorderlist.save().then(inserteddocument=> {
            res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
            mailservice.sendmail(req.body.customaremailid, 'ORDER PLACED SUCCESSFUL', 'THANK YOU FOR SHOOPING AND VISITE AGAIN'+ inserteddocument);
            console.log("successfull")})
            .catch((e)=> console.log(e));
          
});


router.route('/wishlist/removeitem/:id').delete((req,res) =>{
    WishListProduct.findByIdAndDelete(req.params.id).then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove From Cart
router.route('/cart/removeitem/:id').delete((req,res) =>{
    CartProduct.findByIdAndDelete(req.params.id).then(() => res.json('food deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove All From Cart
router.route('/cart/removeallitem/:cartfoodid').delete((req,res) =>{
    CartProduct.findOneAndDelete({"cartfoodid":req.params.cartfoodid}).then(() => res.json('food deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Remove From OrderList
router.route('/orderlist/removeitem/:id').delete((req,res) =>{
    OrderListProduct.findById(req.params.id).then((data)=>{
        mailservice.sendmail(data.customaremailid, 'YOUR ORDER READY FOR DELIVERY', 'FOOD DETAILS'+ data);
        OrderListProduct.findByIdAndDelete(req.params.id).then(() => {
            res.json('food deleted.')})
        .catch(err => res.status(400).json('Error: ' + err));
    })
});

module.exports = router