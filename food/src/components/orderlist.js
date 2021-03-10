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
          <tr key={index}>
            <td>{currentrow.foodid}</td>
            <td>{currentrow.foodcat}</td>
            <td>{currentrow.foodname}</td>
            <td>{currentrow.fooddesc}</td>
            <td>{currentrow.foodprice}</td>
            <td>{currentrow.foodquantity}</td>
            <td>{currentrow.foodPicture}</td>
            <td>{currentrow.customarname}</td>
            <td>{currentrow.customaremailid}</td>
            <td>{currentrow.customarphone}</td>
            <td>{currentrow.customaraddress}</td>
            <td>{currentrow.customarpin}</td>
            <td><button type="submit" className="btn btn-warning" onClick={() => ProcessForDelivery(currentrow._id,index) }>Processed</button></td>
          </tr>
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
        <br />
        <h3>Order Lists</h3>
        <table border="1" align="center">
          <thead>
            <tr>
            <th>Product Id</th>
            <th>Product Catagory</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Product Picture</th>
              <th>Customar Name</th>
              <th>Customar EmailID</th>
              <th>Customar Mobile</th>
              <th>Customar Address</th>
              <th>Customar Pincode</th>
            </tr>
          </thead>
  
          <tbody>
            {viewOrderList()}
          </tbody>
        </table>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  
  
  export default OrderList