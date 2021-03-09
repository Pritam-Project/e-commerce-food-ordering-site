import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './footer';
import { Redirect } from 'react-router-dom';


function CartProductOperation() {
    const [prodlist, setEList] = useState([]);
    const [productname, setProSpe] = useState("");
    const [productcat, setProCat] = useState("");
    const [productdesc, setProDes] = useState("");
    const [productprice, setProCost] = useState("");
    const [productPicture, setProFile] = useState("");
    const [productquantity, setProQuantity] = useState("");
    const [cartproductid, setCartProID] = useState("");
    const [useremail, setUserEmail] = useState(sessionStorage.getItem("useremail"))
    const [productid, setProId] = useState("");
    const [ID, setID] = useState("");
    const [total, setTotal] = useState("");
    const [msg, setMessage] = useState("");
    const [id, setId] = useState("");
    const [status,setStatus] = useState(true)
    const [count, setCount] = useState()
    const [foodowner, setFoodOwner] = useState("");
    const [foodowneremail, setFoodOwnerEmail] = useState("");
    var myarr =[];
    var sum = 0;

    const [customarname, setCustomarName] = useState(sessionStorage.getItem('CustomarName'))
    const [customaremailid, setCustomarEmailId]= useState(sessionStorage.getItem('CustomarEmailId'));
    const [customarphone, setCustomarPhone] = useState(sessionStorage.getItem('CustomarPhone'));
    const [customaraddress, setCustomarAddress] = useState(sessionStorage.getItem('CustomarAddress'));
    const [customarpin, setCustomarPin]= useState(sessionStorage.getItem('CustomarPin'));


    const onChangeCusName = (e) => setCustomarName(e.target.value);
    const onChangeCusEmail = (e) => setCustomarEmailId(e.target.value);
    const onChangeCusMobile = (e) => setCustomarPhone(e.target.value);
    const onChangeCusAddress = (e) => setCustomarAddress(e.target.value);
    const onChangeCusPin = (e) => setCustomarPin(e.target.value);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        setMessage("Address Submitted")
        console.log(`Address submitted:`);
        console.log(`Customar Name : ${customarname}`);
        console.log(`Customar Email ID : ${useremail}`);
        console.log(`Customar Mobile: ${customarphone}`);
        console.log(`Customar Address: ${customaraddress}`);
        console.log(`Customar Pin: ${customarpin}`);


        const orderinfo = {
            customarname: customarname,
            customaremailid: useremail,
            customarphone: customarphone,
            customaraddress: customaraddress,
            customarpin: customarpin,
            foodowner:foodowner,
            foodowneremail:foodowneremail,
            foodid : productid,
            foodcat: productcat,
            foodname : productname,
            fooddesc: productdesc,
            foodprice : productprice,
            foodquantity:productquantity,
            foodPicture: productPicture,
      }
          console.log(orderinfo)
          axios.post('http://localhost:4500/food/orderlist', orderinfo)
                    .then(res => {
                        var tempprolist = [...prodlist]; // make a new copy of array instead of mutating the same array directly. 
                        tempprolist.splice(id, 1);
                        axios.delete('http://localhost:4500/food/cart/removeitem/'+ID).then(()=> {
                            console.log(res.data)
                            alert("Added to OrderList")  ;
                            setEList(tempprolist)
                            setMessage("Total Amount :")
                            setStatus(true)
                            
                        }).catch((error) => {
                            console.log(error);
                          })
                        
                        
                    });

        setCustomarName('')
        setCustomarEmailId('')
        setCustomarPhone('')
        setCustomarAddress('')
        setCustomarPin('')
        
        }

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('http://localhost:4500/food/carts/mycart/'+ useremail)
        .then(response => {
          console.log(response.data);
          
          const {foodid, foodcat, fooddesc, foodowner,foodowneremail,cartfoodid,foodname,foodprice,foodquantity,foodPicture,_id} = response.data[0]
                    setProSpe(foodname)
                    setProCat(foodcat)
                    setProDes(fooddesc)
                    setProCost(foodprice)
                    setProId(foodid)
                    setProFile(foodPicture)
                    setProQuantity(foodquantity)
                    setCartProID(cartfoodid)
                    setFoodOwner(foodowner)
                    setFoodOwnerEmail(foodowneremail)
                    setID(_id)

         for(let i=0 ; i< response.data.length ; i++)
         {
            myarr.push(response.data[i].foodprice);
         }

         console.log('Home = '+myarr);

         for(let i = 0 ; i<myarr.length ; i++)
         {
           // eslint-disable-next-line react-hooks/exhaustive-deps
           sum = sum+ myarr[i];
         }
         setTotal(sum);
         setMessage("Total Amount : ")
         console.log('Total Price :'+sum);
        
        
        setEList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])
  
    function viewEmpList() {
      // console.log(mm);
      return prodlist.map((currentrow, index) => {
        return (
          <tr key={index}>
            
            <td>{currentrow.useremail}</td>
            <td>{currentrow.foodname}</td>
            <td>{currentrow.foodcat}</td>
            <td>{currentrow.fooddesc}</td>
            <td>x {currentrow.foodquantity}</td>
            <td>{currentrow.foodprice}</td>
            {/* <td>{currentrow.foodPicture}</td> */}
            <td>{currentrow.updatedAt}</td>
            <td><button type="submit" className="btn btn-primary" onClick={() => RemoveFromCart(currentrow.foodid) }>Remove</button></td>
            <td><button type="submit" className="btn btn-secondary" onClick={() => DeleteFromCart(currentrow._id,index) }>Delete</button></td>
            <td><button type="submit" className="btn btn-warning" onClick={() => MoveToOrderList(index) }>BUY NOW</button></td>
          </tr>

        );
      });
    }
    function DeleteFromCart(currentrowid,index) {
      var tempprolist = [...prodlist]; // make a new copy of array instead of mutating the same array directly. 
      tempprolist.splice(index, 1);
      axios.delete('http://localhost:4500/food/cart/removeitem/'+currentrowid).then(
        setEList(tempprolist),
        axios.get('http://localhost:4500/food/carts/mycart/'+ useremail)
        .then((response) => {
          
          console.log(response.data);
          
         for(let i=0 ; i< response.data.length ; i++)
         {
            myarr.push(response.data[i].foodprice);
         }

         console.log(myarr);
         sum =0;
         for(let i = 0 ; i<myarr.length ; i++)
         {
           // eslint-disable-next-line react-hooks/exhaustive-deps
           sum = sum+ myarr[i];
           console.log(sum);
         }
         setTotal(sum);
         setMessage("Total Amount : ");
         console.log(sum);
        
        
          
        })
        .catch((error) => {
          console.log(error);
        })
        
        ).catch((error) => {
        console.log(error);
      });
      
    }

    function RemoveFromCart(currentrowid){

      axios.get('http://localhost:4500/food/carts/removeone/'+currentrowid).then(() =>{
        axios.get('http://localhost:4500/food/carts/mycart/'+ useremail)
        .then(response => {
          
          console.log(response.data);
          setEList(response.data)
         for(let i=0 ; i< response.data.length ; i++)
         {
            myarr.push(response.data[i].foodprice);
         }

         console.log(myarr);
         sum =0;
         for(let i = 0 ; i<myarr.length ; i++)
         {
           // eslint-disable-next-line react-hooks/exhaustive-deps
           sum = sum+ myarr[i];
           console.log(sum);
         }
         setTotal(sum);
         setMessage("Total Amount :");
         console.log(sum);
       
        
          
        })
        .catch((error) => {
          console.log(error);
        })
        
      }).catch((error) => {
        console.log(error);
      });

    }

    
function MoveToOrderList(index) {
  console.log("Create Object")
  setId(index)
  setMessage("")
  setStatus(false)
  console.log("Parameter Passed")

}

function MoveAllToOrderList(){
  setStatus("Please_wait");
  console.log("Function Executed"+ prodlist.length);
  setCount(prodlist.length);
  if(prodlist.length > 0) {

      for(let i=0 ; i < prodlist.length ; i++)
          {
                console.log("For Loop Executed");
                const {foodid,foodcat, fooddesc, foodowner,foodowneremail,cartfoodid,foodname,foodprice,foodquantity,foodPicture,_id} = prodlist[i]
                setProSpe(foodname)
                setProCat(foodcat)
                setProDes(fooddesc)
                setProCost(foodprice)
                setProId(foodid)
                setProFile(foodPicture)
                setProQuantity(foodquantity)
                setCartProID(cartfoodid)
                setFoodOwner(foodowner)
                setFoodOwnerEmail(foodowneremail)
                setID(_id)

                const orderinfo = {
                    customarname: customarname,
                    customaremailid: useremail,
                    customarphone: customarphone,
                    customaraddress: customaraddress,
                    customarpin: customarpin,           
                    foodowner:foodowner,
                    foodowneremail:foodowneremail,
                    foodid : productid,
                    foodcat: productcat,
                    foodname : productname,
                    fooddesc: productdesc,
                    foodprice : productprice,
                    foodquantity:productquantity,
                    foodPicture: productPicture,
                }
            console.log(orderinfo)

                axios.post('http://localhost:4500/food/orderlist', orderinfo)
                            .then(res => {
                                console.log("Inserted");
                                console.log(res.data);
                                axios.delete('http://localhost:4500/food/cart/removeallitem/'+cartfoodid).then(() => {
                                  
                                  if(count > 0 ){
                                    setCount(count - 1);
                                    console.log("Document Deleted From Cart Table");
                                  } else{
                                    setStatus("Redirect");
                                    console.log("Document Deleted From Cart Table");
                                  }
                                  
                                })    
                            });
            
          }
          console.log("For Loop End");
      }

}

if (status === true) {

    return (
      <div>
        <NavigationBar/>
        <br />
        <h3>Cart DETAILS</h3>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Catagory</th>
              <th>Product Description</th>
              <th>Product Quantity</th>
              <th>Calculated Price</th>
              {/* <th>Product</th> */}
              <th>Added At</th>
              <th>Remove</th>
              <th>Remarks</th>
              <th>BUY NOW</th>
            </tr>
          </thead>
  
          <tbody>
            {viewEmpList()}
          </tbody>
        </table>

        <h3>{msg}{total}</h3>
        <br/><button type="submit" className="btn btn-secondary" onClick={() => MoveAllToOrderList() }>BUY ALL</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  else if(status === "Redirect"){
    return(
      <div>
        <Redirect to = "/display_catagory_prod"/>
      </div>
    )
  }

  else if(status === "Please_wait"){
    return (
        <div id="loading">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p><img src="images/loading.gif" /> </p>
        <p>Thank You for Shopping</p>
        <p>Please Leave a Review on Blog for a Good Shopping Experience</p>
        </div>
    );
    }

  else{
    return(
        <div className="container">
          <NavigationBar/>
        <div className="row">
            <Card>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h3>Add Address</h3>
                <h4 style={{ color: "brown" }}> {msg}</h4>
                <div>
                <input type="text" value={customarname}
                onChange={onChangeCusName} placeholder="Enter Name"
                required />
            <br /><br />

            <input type="email" value={useremail}
                onChange={onChangeCusEmail} placeholder="Enter Email"
                required />
            <br /><br />

            <input type="number" value={customarphone}
                onChange={onChangeCusMobile} placeholder="Enter Mobile No"
                required />
            <br /><br />
            <label>ADDRESS: </label> <br />
            <textarea value={customaraddress}
                onChange={onChangeCusAddress} rows="3" >
            </textarea>
            <br /><br />
            </div>
            <div>
            <input type="number" value={customarpin}
                onChange={onChangeCusPin} placeholder="Enter Pin No"
                required />
            </div>
            <br/><br/>
            <div className="form-group">
                    <button className="btn btn-primary" type="submit">Save Address</button>
            </div>
            </form>
            </Card>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
    </div>
    )
  }
}
  
  
  export default CartProductOperation