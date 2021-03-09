import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Order from './order'
import NavigationBar from './NavigationBar';
import Footer from './footer';
import { useHistory } from 'react-router-dom';

function DisplayAllUserOp(poprs) {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [id, setId] = useState("")
  const useremail = sessionStorage.getItem("useremail")
  const [status,setStatus ] = useState(true);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('/search/searchbycatagory/Bengali')
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewProList() {
    return prolist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{currentrow.restfoodcat}</td>
          <td>{currentrow.restfoodspe}</td>
          <td>{currentrow.restfooddes}</td>
          <td>{currentrow.restfoodcost}</td>
          <td><button type="submit" className="btn btn-primary" onClick={() => AddToCart(currentrow._id,useremail) }>AddToCart</button></td>
          <td><button type="submit" className="btn btn-secondary" onClick={() =>  MoveToWishList(currentrow._id,useremail) }>MoveToWishlist</button></td>
          <td><button type="submit" className="btn btn-warning" onClick={() =>  MoveToOrderList(currentrow.restfoodid) }>Buy Now</button></td>
          
        </tr>
      )
    })
  }

  function AddToCart(params,useremail) {
    let authuser = sessionStorage.getItem('Key_Veriable')
         console.log(authuser)
         if (authuser === "USER") {
    const obj ={
      addtocartid:params,
      cartuseremail:useremail
    }
    axios.post('/food/cart',obj).then(
      alert("Added to Cart"),
      
      
    ).catch((error) => {
      console.log(error);
    });
    
  }
  else {
    history.push('/login')

}

}

  function MoveToWishList(params,useremail) {
    let authuser = sessionStorage.getItem('Key_Veriable')
    console.log(authuser)
    if (authuser === "USER") {
    const obj ={
      addtowishlistid:params,
      wishuseremail:useremail
    }
    axios.post('/food/wishlist/',obj).then(
      alert("Added to Wishlist")
    ).catch((error) => {
      console.log(error);
    });
  }
  else {
    history.push('/login')
  
  }
}


function MoveToOrderList(params) {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === "USER") {
          console.log("Create Object")
          setStatus(false)
          setId(params)
          console.log("Parameter Passed")

  }
  else {
    history.push('/login')
  
  }
}
  



  if (status === true) {
  return (
    <div>
      <NavigationBar />
      <h3>All Food Details</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Food Catagory</th>
            <th>Food Specification</th>
            <th>Food Description</th>
            <th>Food Cost</th>
            <th>Add to cart</th>
            <th>Move to wISHLIST</th>
            <th>BUY NOW</th>
            
          </tr>
        </thead>

        <tbody>
          {viewProList()}
        </tbody>
      </table>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  )
}else{
  return(
    <div>
      <NavigationBar />
      <Order id = {id} />
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  )
}

}



export default DisplayAllUserOp