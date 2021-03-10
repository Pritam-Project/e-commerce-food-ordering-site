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
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{currentrow.restfoodspe}</td>
          <td>{currentrow.restfooddes}</td>
          <td>{currentrow.restfoodcost}</td>
          <td>{currentrow.restfoodcat}</td>
          <td><button type="submit" className="btn btn-primary" onClick={() => RemovePoster(currentrow._id,index) }>Delete</button></td>
          <td><button type="submit" className="btn btn-primary" onClick={() => UpdatePoster(index) }>Update</button></td>
          
          
        </tr>
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
      <h3>All Added Posters </h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Food Specification</th>
            <th>Food Description</th>
            <th>Food Price</th>
            <th>Food Catagory</th>
            <th>Delete</th>
            <th>Update</th>
             
          </tr>
        </thead>

        <tbody>
          {viewProList()}
        </tbody>
      </table>
      <br/><br/><br/><br/>
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