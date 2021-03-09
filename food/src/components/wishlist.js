import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Footer from './footer';

function WishList() {
    const [emplist, setEmpList] = useState([]);
    const useremail = sessionStorage.getItem("useremail");
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('http://localhost:4500/food/wishlist/mylist/' + useremail)
        .then(response => {
          console.log(response.data)
          setEmpList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])
  
    function viewEmpList() {
      return emplist.map((currentrow, index) => {
        return (
          <tr key={index}>
        
            <td>{currentrow.useremail}</td>
            <td>{currentrow.foodcat}</td>
            <td>{currentrow.foodname}</td>
            <td>{currentrow.fooddesc}</td>
            <td>{currentrow.foodprice}</td>          
            <td>{currentrow.updatedAt}</td>
            <td><button type="submit" className="btn btn-secondary" onClick={() => MoveToCart(currentrow.foodid,currentrow._id,index) }>Add to Cart</button></td>
            <td><button type="submit" className="btn btn-warning"onClick={() => RemoveFromWishList(currentrow._id,index) }>Delete</button></td>

            
          </tr>
        );
      });
    }

    function MoveToCart(id,currentrowid,index) {
      const obj ={
        addtocartid:id,
        cartuseremail:useremail
      }
      console.log(obj);
      axios.post('http://localhost:4500/food/cart',obj).then(
        RemoveFromWishList(currentrowid,index),
        alert("Added to Cart!")
      ).catch((error) => {
        console.log(error);
      });
    }

    function RemoveFromWishList(currentrowid,index) {
      var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
      let removerow = tempemplist.splice(index, 1);
      console.log(removerow[0].empemail)
      axios.delete('http://localhost:4500/food/wishlist/removeitem/'+currentrowid).then(setEmpList(tempemplist)).catch((error) => {
        console.log(error);
      });
      
    }
  
    return (
      <div>
        <NavigationBar/>
        <br />
        <h3>Product Lists</h3>
        <table border="1" align="center">
          <thead>
            <tr>
              
              <th>User Email</th>
              <th>Product Catagory</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Date</th>
              <th>Add to cart</th>
              <th>Remark</th>
              
            </tr>
          </thead>
  
          <tbody>
            {viewEmpList()}
          </tbody>
        </table>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  
  
  export default WishList