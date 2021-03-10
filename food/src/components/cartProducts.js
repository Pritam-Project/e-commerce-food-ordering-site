import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './footer';
import OrderFromCart from './orderfromcart';


function CartProduct() {
    const [prodlist, setEList] = useState([]);
    const [total, setTotal] = useState("");
    const [msg, setMessage] = useState("");
    const [id, setId] = useState("");
    const [status,setStatus] = useState(true)
    var myarr =[];
    var sum = 0;
    const useremail = sessionStorage.getItem("useremail");
    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('/food/carts/mycart/'+useremail)
        .then(response => {
          console.log(response.data);
         for(let i=0 ; i< response.data.length ; i++)
         {
            myarr.push(response.data[i].foodprice);
         }

         console.log('Home = '+myarr);

         for(let i = 0 ; i<myarr.length ; i++)
         {
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
            <td><button type="submit" className="btn btn-primary" onClick={() => DeleteFromCart(currentrow._id,index) }>Delete</button></td>
            <td><button type="submit" className="btn btn-secondary" onClick={() => MoveToOrderList(currentrow.cartfoodid) }>BUY NOW</button></td>
          </tr>

        );
      });
    }
    function DeleteFromCart(currentrowid,index) {
      var tempprolist = [...prodlist]; // make a new copy of array instead of mutating the same array directly. 
      tempprolist.splice(index, 1);
      axios.delete('/food/cart/removeitem/'+currentrowid).then(
        setEList(tempprolist),
        axios.get('/food/carts/mycart/'+useremail)
        .then(response => {
          
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

    function MoveToOrderList(params) {
      console.log("Create Object")
      setId(params)
      setStatus(false)
      console.log("Parameter Passed")
    
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
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }else{
    return(
      <div>
        <OrderFromCart id = {id} />
      </div>
    )
  }
  }
  
  
  export default CartProduct