import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';


function DisplayRestaurantProfile() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [restemail, setRestEmail] = useState(sessionStorage.getItem('restemail'))
  const [msg, setMessage] = useState("");


  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "RESTAURANT")
      {
        axios.get('/rest/restaurant/'+restemail)
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      }

      else{
          console.log("please Restaurant Login First")
          history.push("/restaurantlogin")
        
      }
    
  }, [history])

  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
          <div className='row'>
        <div className="col" key={index}>
            <div className="card" >
              <div className='card-header'>
                <h1>{currentrow.restname}</h1>
                </div>
                <p>Restaurant Email: {currentrow.restemail}</p>
                <p>Restaurant Mobile No: {currentrow.restmobile}</p>
                <p>Restaurant Country: {currentrow.restcountry}</p>
                <p>Restaurant Address: {currentrow.restaddress}</p>
                <p>About Restaurant: {currentrow.about}</p>
            <p><button type="submit" className="btn btn-warning" onClick={() => UpdateRestaurant(currentrow._id,index) }>UPDATE DETAILS</button></p>
            </div>
            </div>
            </div>
      )
    })
  }

  function UpdateRestaurant(){

  }
  

  return (
    <div>
    <NavigationBar/>
    <br/>
    <hr/>
    <div>
      <h2><em>Restaurant Detalis</em></h2>
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




export default DisplayRestaurantProfile