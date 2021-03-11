import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdatePosterAdmin from './adminUpdatePoster'
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';




function DisplayAdminProductsAlsoOperations() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [msg, ] = useState("");
  const [status, setStatus ] = useState(true);
  const [id, setId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "ADMIN")
      {
        axios.post('/admin/foods/'+productOwner)
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      }

      else{
          console.log("please Admin Login First")
          history.push("/adminlogin")
        
      }
    
  }, [history])

  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
        <div className="col" >
        <div className="card" key={index}>
        {/* <img src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" style="width:100%" /> */}
           <h1>{index +1}</h1>
            <h1>{currentrow.restfoodspe}</h1>
            <p className="price">Food Price: {currentrow.restfoodcost}</p>
            <p>Food Catagory: {currentrow.restfoodcat}</p>
            <p>Food Description: {currentrow.restfooddes}</p>
            <p><button type="submit" className="btn btn-primary" onClick={() => UpdatePoster(index) }>Update</button></p>
            <p><button type="submit" className="btn btn-warning" onClick={() => RemovePoster(currentrow._id,index) }>Delete</button></p>
            
        </div>
        </div>
      )
    })
  }

  

  function RemovePoster(id,index){
    var tempemplist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
      tempemplist.splice(index, 1);
    axios.delete('/admin/fooddelete/'+id).then(() =>{
        alert("Deleted")
        setProList(tempemplist)
    }).catch((err) => console.log(err))
  }

  function UpdatePoster(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].restfoodid)
    setStatus(false)
    setId(removerow[0].restfoodid)
  }



  if (status === true) {
  return (
    <div>
    <NavigationBar/>
      <b style={{ color: "red" }}>{msg}</b>
      <h3>All Foods </h3>
      <div>
          {viewProList()}
          </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}
else{
  return (
    <div>
      <UpdatePosterAdmin id={id} />
    </div>
  )
}
}




export default DisplayAdminProductsAlsoOperations