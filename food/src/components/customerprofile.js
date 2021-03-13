import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';

function DisplayCustomerProfile() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [useremail, setUserEmail] = useState(sessionStorage.getItem('useremail'))
  const [msg, setMessage] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "USER")
      {
        axios.get('/user/customer/'+useremail)
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      }
      else{
          console.log("please User Login First")
          history.push("/login")   
      } 
  }, [history])

  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
          <div className='row'>
        <div className="col" key={index}>
            <div className="card" >
               <h1>{currentrow.empname}</h1>
                <p>Coustomer Email: {currentrow.empemail}</p>
                <p>Coustomer Mobile No: {currentrow.empmobile}</p>
                <p>Coustomer Country: {currentrow.empcountry}</p>
                <p>Coustomer Address: {currentrow.empaddress}</p>
                <p>Coustomer Pin: {currentrow.emppin}</p>
            <p><button type="submit" className="btn btn-warning" onClick={() => UpdateCustomer(currentrow._id,index) }>UPDATE DETAILS</button></p>
            </div>
            </div>
            </div>
      )
    })
  }

  function UpdateCustomer(){

  }

  return (
    <div>
    <NavigationBar/>
    <br/>
    <hr/>
    <div>
      <h2><em>Your Detalis</em></h2>
      <h4 style={{ color: "brown" }}><em> {msg}</em></h4>
      <div>
          {viewProList()}
          </div>
          </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}


export default DisplayCustomerProfile