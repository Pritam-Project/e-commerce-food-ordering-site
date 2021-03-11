//This part is done by pritam gayen
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Updatepro from './updatepro'
import NavigationBar from './NavigationBar';
import Footer from './footer';
import {Redirect} from 'react-router-dom';


function DisplayAll() {
  const [prolist, setProList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [id, setId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  
  useEffect(() => {
    axios.get('/restfood/'+sessionStorage.getItem("restemail"))
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
        <div className="card" key={index}>
        {/* <img src={process.env.PUBLIC_URL + '/images/nonvage.jpg'} alt="img" style="width:100%" /> */}
           <h1>{index +1}</h1>
            <h1>{currentrow.restfoodspe}</h1>
            <p className="price">Food Price: {currentrow.restfoodcost}</p>
            <p>Food Catagory: {currentrow.restfoodcat}</p>
            <p>Food Description: {currentrow.restfooddes}</p>
            <p><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></p>
        <p><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></p>
        
        </div>
        </div>
      )
    })
  }



  function removeRow(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].restfoodid)
    axios.delete('/restfood/remove/' + removerow[0].restfoodid)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setProList(tempprolist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }

  function updateRow(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].restfoodid)
    setStatus(false)
    setId(removerow[0].restfoodid)
  }



  if (status === true) {
    let authuser = sessionStorage.getItem('Key_Veriable')
         console.log(authuser)
         if (authuser === "RESTAURANT") {
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
else {
    return (<Redirect to="/designerlogin" />)

}
}
else{
  return (
    <div>
      <NavigationBar />
      <br />
      <Updatepro id={id} />
      <br /><br /><br />
      <Footer />
    </div>
  )
}
}



export default DisplayAll