import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';


function DisplayAllRestaurant() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [restemail, setRestEmail] = useState('')
  const [msg, setMessage] = useState("");

  const onChangeRestEmail = (e) => {
    setRestEmail(e.target.value);
    setMessage('')
  }

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "ADMIN")
      {
        axios.get('/admin/allrestaurant')
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.get('/admin/restaurant/' + restemail)
      .then(res => {
        console.log(res.data)
        setProList(res.data)
      })
      .catch(err => {
        console.log(err)
        setMessage('NO RECORD FOUND')
        setProList([])
      })

    setRestEmail('')
  }


  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
        <div className="col" key={index}>
            <div className="card" >
               <h1>{index +1}</h1>
                <h1>{currentrow.restname}</h1>
                <p>Restaurant Email: {currentrow.restemail}</p>
                <p>Restaurant Mobile No: {currentrow.restmobile}</p>
                <p>Restaurant Country: {currentrow.restcountry}</p>
                <p>Restaurant Address: {currentrow.restaddress}</p>
                <p>About Restaurant: {currentrow.about}</p>
            <p><button type="submit" className="btn btn-warning" onClick={() => RemoveRestaurant(currentrow._id,index) }>Delete</button></p>
            </div>
            </div>
      )
    })
  }

  
  function RemoveRestaurant(id,index){
    var tempemplist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
      tempemplist.splice(index, 1);
    axios.delete('/admin/restaurantdelete/'+id).then(() =>{
        alert("Restaurant Record Deleted")
        setProList(tempemplist)
    }).catch((err) => console.log(err))
  }

  return (
    <div>
    <NavigationBar/>
    <br/>
    <div className='card'>
      <h3>SEARCH BY EMAIL ID</h3>
    <form onSubmit={handleSubmit}>
    <input type="email" value={restemail}
            onChange={onChangeRestEmail}
            placeholder="Enter Restaurant Email"
            required />
      <br />
      <br/>
      <input type="submit" value="SEARCH" className="btn btn-success" />
    </form>
    <br/>
    </div>
    <hr/>
    <div>
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


export default DisplayAllRestaurant