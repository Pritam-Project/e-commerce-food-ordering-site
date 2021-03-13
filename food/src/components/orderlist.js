import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Footer from './footer';

function OrderList() {
    const [orderlist, setOrderList] = useState([]);
  
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('/food/orderlist/order')
        .then(response => {
          console.log(response.data)
          setOrderList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])
  
    function viewOrderList() {
      return orderlist.map((currentrow, index) => {
        return (
          <div className="col" key={index}>
          <div className="card" >
          <div className = 'card-header'>
           <h1>{index +1}</h1>
           </div>
              <h1>{currentrow.foodname}</h1>
              <p>Food ID: {currentrow.foodid}</p>
              <p>Food Owner Email: {currentrow.foodowneremail}</p>
              <p className="price">Food Price: {currentrow.foodprice}</p>
              <p>Food Catagory: {currentrow.foodcat}</p>
              <p>Food Description: {currentrow.fooddesc}</p>
              <p>Food Quantity: {currentrow.foodquantity}</p>
              <hr/>
              <p>Customar Name: {currentrow.customarname}</p>
              <p>Customar EmailID: {currentrow.customaremilid}</p>
              <p>Customar Phone: {currentrow.customarphone}</p>
              <p>Customar Address: {currentrow.customaraddress}</p>
              <p>Customar Pin: {currentrow.customarpin}</p>
              <p><button type="submit" className="btn btn-warning" onClick={() => ProcessForDelivery(currentrow._id,index) }>Processed</button></p>
          
          </div>
          </div>
        );
      });
    }

    function ProcessForDelivery(currentrowid,index){
      var tempprolist = [...orderlist]; // make a new copy of array instead of mutating the same array directly. 
      tempprolist.splice(index, 1);
      axios.delete('/food/orderlist/removeitem/'+currentrowid).then(
        setOrderList(tempprolist),
        axios.get('/food/orderlist/order')
        .then((response) => {
          console.log(response.data);
        })
      )
        
    }
  
    return (
      <div>
        <NavigationBar/>
        <h2><em>Order List</em></h2>
        <br />
        <div>
            {viewOrderList()}
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  
  
  export default OrderList