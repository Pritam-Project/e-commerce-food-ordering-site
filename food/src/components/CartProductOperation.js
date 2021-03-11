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

    const [customarname, setCustomarName] = useState("")
    const [customaremailid, setCustomarEmailId]= useState("");
    const [customarphone, setCustomarPhone] = useState("");
    const [customaraddress, setCustomarAddress] = useState("");
    const [customarpin, setCustomarPin]= useState("");
    const [customarcountry, setCustomarCountry]= useState("");

    useEffect(() => {
      axios.get('/user/search/'+ useremail)
        .then(response => {
          console.log(response.data);
          
          const {empname,empemail,empmobile,empcountry,empaddress,emppin} = response.data[0]
          setCustomarAddress(empaddress)
          setCustomarEmailId(empemail)
          setCustomarPhone(empmobile)
          setCustomarName(empname)
          setCustomarCountry(empcountry)
          setCustomarPin(emppin)
        }).catch((error) => {
          console.log(error);
        })
    }, [])
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
          axios.post('/food/orderlist', orderinfo)
                    .then(res => {
                        var tempprolist = [...prodlist]; // make a new copy of array instead of mutating the same array directly. 
                        tempprolist.splice(id, 1);
                        axios.delete('/food/cart/removeitem/'+ID).then(()=> {
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
      axios.get('/food/carts/mycart/'+ useremail)
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
          <div className="col" >
            <div className="card" key={index}>
            {/* <img src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" style="width:100%" /> */}
               <h1>{index +1}</h1>
                <h1>{currentrow.foodname}</h1>
                <p className="price">Food Price: {currentrow.foodprice}</p>
                <p>Food Catagory: {currentrow.foodcat}</p>
                <p>Food Description: {currentrow.fooddes}</p>
                <p>Food Quantity: {currentrow.foodquantity}</p>
                <p>Date: {currentrow.updatedAt}</p>
                <p><button type="submit" className="btn btn-primary" onClick={() => RemoveFromCart(currentrow.foodid) }>Remove</button></p>
                <p><button type="submit" className="btn btn-secondary" onClick={() => DeleteFromCart(currentrow._id,index) }>Delete</button></p>
                <p><button type="submit" className="btn btn-warning" onClick={() => MoveToOrderList(index) }>BUY NOW</button></p>
            </div>
            </div>

        );
      });
    }
    function DeleteFromCart(currentrowid,index) {
      var tempprolist = [...prodlist]; // make a new copy of array instead of mutating the same array directly. 
      tempprolist.splice(index, 1);
      axios.delete('/food/cart/removeitem/'+currentrowid).then(
        setEList(tempprolist),
        axios.get('/food/carts/mycart/'+ useremail)
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

      axios.get('/food/carts/removeone/'+currentrowid).then(() =>{
        axios.get('/food/carts/mycart/'+ useremail)
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

                axios.post('/food/orderlist', orderinfo)
                            .then(res => {
                                console.log("Inserted");
                                console.log(res.data);
                                axios.delete('/food/cart/removeallitem/'+cartfoodid).then(() => {
                                  
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
        <h3>Cart Foods</h3>
        <div>
            {viewEmpList()}
            </div>

        <h3><em>{msg}{total}</em></h3>
        <br/><button type="submit" className="btn btn-secondary" onClick={() => MoveAllToOrderList() }>BUY ALL</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
            <div className="card">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h3>Add Address</h3>
                <h4 style={{ color: "brown" }}> {msg}</h4>
                <div>
                <input type="text" value={customarname}
                onChange={onChangeCusName} placeholder="Enter Your Name"
                required />
            <br /><br />

            <input type="email" value={useremail}
                onChange={onChangeCusEmail} placeholder="Enter Your Email"
                required />
            <br /><br />

            <input type="number" value={customarphone}
                onChange={onChangeCusMobile} placeholder="Enter Your Mobile No"
                required />
            <br /><br />
            <label>ADDRESS: </label> <br />
            <textarea value={customaraddress}   placeholder="Enter Your Address"
                onChange={onChangeCusAddress} rows="3" >
            </textarea>
            <br /><br />
            </div>
            <div>
            <input type="number" value={customarpin}
                onChange={onChangeCusPin} placeholder="Enter Your Pin Code"
                required />
            </div>
            <br/><br/>
            <div className="form-group">
                    <button className="btn btn-primary" type="submit">Save Address</button>
            </div>
            </form>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
    </div>
    )
  }
}
  
  
  export default CartProductOperation