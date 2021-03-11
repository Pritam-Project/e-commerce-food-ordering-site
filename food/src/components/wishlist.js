import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Footer from './footer';

function WishList() {
    const [emplist, setEmpList] = useState([]);
    const useremail = sessionStorage.getItem("useremail");
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('/food/wishlist/mylist/' + useremail)
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
          <div className="col" >
          <div className="card" >
            <h1>{index +1}</h1>
          {/* <img src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" style="width:100%" /> */}
          <div className="container">
              <h1>{currentrow.foodname}</h1>
              <p className="price">Food Price: {currentrow.foodprice}</p>
              <p>Food Catagory: {currentrow.foodcat}</p>
              <p>Food Description: {currentrow.fooddesc}</p>
              <p>Customar Email: {currentrow.useremail}</p>
              <p>Date: {currentrow.updatedAt}</p>
              <p><button type="submit" className="btn btn-warning" onClick={() => MoveToCart(currentrow.foodid,currentrow._id,index) }>Add to Cart</button></p>
              <p><button type="submit" className="btn btn-danger"onClick={() => RemoveFromWishList(currentrow._id,index) }>Delete</button></p>
          </div>
          </div>
          </div>

        );
      });
    }

    function MoveToCart(id,currentrowid,index) {
      const obj ={
        addtocartid:id,
        cartuseremail:useremail
      }
      console.log(obj);
      axios.post('/food/cart',obj).then(
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
      axios.delete('/food/wishlist/removeitem/'+currentrowid).then(setEmpList(tempemplist)).catch((error) => {
        console.log(error);
      });
      
    }
  
    return (
      <div>
        <NavigationBar/>
        <br />
        <h3>Food List</h3>
        <div>
            {viewEmpList()}
          </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div >
        <Footer/>
        </div>
      </div>
    )
  }
  
  
  export default WishList