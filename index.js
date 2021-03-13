//var PORT = process.env.PORT || 3000;
//Node JS require
//The basic functionality of require is that it reads a 
//JavaScript file, executes the file, and then proceeds 
//to return the export object.
// IMPORT EXPRESS SERVER
const express = require('express');
//The express() syntax is the equivalent of saying new express(). 
//It creates a new instance of express that you can assign to a variable.
var app = express();

var bodyParser = require("body-parser");
//A new body object containing the parsed data is populated 
//on the request object after the middleware (i.e. req.body). 
//This object will contain key-value pairs, 
app.use(bodyParser.json());

//CORS is a node.js package for providing a 
//Connect/Express middleware 
var cors = require('cors')
app.use(cors())

//LINK WITH dbconnect.js :- dbconnect.js will connect with Mongodb
// my_mongoose will capture here export from dbconnect.js - Binding
const my_mongoose = require('./dbconnect_promise.js');
 
// IMPORT empController
const commentAPI = require('./controllers/commentAPI');
const employeeAPI = require('./controllers/employeeAPI_promise.js');
const restaurentApi = require('./controllers/Restaurant.js');
const userAPI = require('./controllers/UserAPI_promise.js');
const restfoodadd = require('./controllers/restaurant_add_food.js');

const foodRouter = require('./controllers/product-router-operation');

app.use('/food',foodRouter);

const productSearch = require('./controllers/ItemAPI_promise');
app.use('/search', productSearch);

const adminOperation = require('./controllers/adminOperations');
app.use('/admin', adminOperation);


const special_menu = require('./controllers/special_menu');
app.use('/special', special_menu);

//USE URL /emp - route to studentController 
app.use('/comment',commentAPI);
app.use('/emp', employeeAPI);
app.use('/rest', restaurentApi);
app.use('/user', userAPI);
app.use('/restfood', restfoodadd);

const payment = require('./controllers/paymentAPI');
app.use('/payment', payment);

if(process.env.NODE_ENV == "production"){
app.use(express.static('food/build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'food', 'build','index.html'))
})
}
// START THE EXPRESS SERVER. 4500 is the PORT NUMBER
//app.listen(4500, () => console.log('EXPRESS Server Started at Port No: 4500'));
const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});