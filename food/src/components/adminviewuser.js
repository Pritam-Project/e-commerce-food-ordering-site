import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';

function DisplayAllRestaurant() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [useremail, setUserEmail] = useState('')
  const [msg, setMessage] = useState("");

  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
    setMessage('')
  }

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "ADMIN")
      {
        axios.get('/admin/allcustomer')
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
    axios.get('/admin/customer/' + useremail)
      .then(res => {
        console.log(res.data)
        setProList(res.data)
      })
      .catch(err => {
        console.log(err)
        setMessage('NO RECORD FOUND')
        setProList([])
      })

    setUserEmail('')
  }


  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
        <div className="col" key={index}>
            <div className="card" >
               <h1>{index +1}</h1>
                <h1>{currentrow.empname}</h1>
                <p>Coustomer Email: {currentrow.empemail}</p>
                <p>Coustomer Mobile No: {currentrow.empmobile}</p>
                <p>Coustomer Country: {currentrow.empcountry}</p>
                <p>Coustomer Address: {currentrow.empaddress}</p>
                <p>Coustomer Pin: {currentrow.emppin}</p>
                <p><button type="submit" className="btn btn-warning" onClick={() => RemoveCustomer(currentrow._id,index) }>Delete</button></p>
            </div>
            </div>
      )
    })
  }

  

  function RemoveCustomer(id,index){
    var tempemplist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
      tempemplist.splice(index, 1);
    axios.delete('/admin/customerdelete/'+id).then(() =>{
        alert("Customer Record Deleted")
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
    <input type="email" value={useremail}
            onChange={onChangeUserEmail}
            placeholder="Enter Customer Email"
            required />
      <br />
      <br/>
      <input type="submit" value="SEARCH" className="btn btn-success" />
    </form>
    <br/>
    </div>
    <hr/>
      <h4 style={{ color: "brown" }}><em> {msg}</em></h4>
      <div>
          {viewProList()}
          </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}


export default DisplayAllRestaurant