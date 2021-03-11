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
        <div className="col" >
            <div className="card" >
              <h1>{index +1}</h1>
            {/* <img src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" style="width:100%" /> */}
            <div className="container">
                <h1>{currentrow.restfoodspe}</h1>
                <p className="price">Food Price: {currentrow.restfoodcost}</p>
                <p>Food Catagory: {currentrow.restfoodcat}</p>
                <p>Food Description: {currentrow.restfooddes}</p>
                <p><button type="submit" className="btn btn-primary" onClick={() => AddToCart(currentrow._id,useremail) }><em>AddToCart</em></button></p>
                <p><button type="submit" className="btn btn-secondary" onClick={() =>  MoveToWishList(currentrow._id,useremail) }><em>MoveToWishlist</em></button></p>
                <p><button type="submit" className="btn btn-warning" onClick={() =>  MoveToOrderList(currentrow.restfoodid) }><em>Buy Now</em></button></p>
            </div>
            </div>
            </div>
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
      <h3><em>All Product Detalis</em></h3>
 <div>
          {viewProList()}
          </div>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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