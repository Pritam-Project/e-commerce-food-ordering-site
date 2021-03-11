import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import StatusPoster from './Status_Poster';
import Footer from './footer';
import './card.css';

function PosterDisplay() {
    const [posterlist, setposterList] = useState([]);
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [status,setStatus ] = useState(true);
  
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('/special/ordfood')
        .then(response => {
          console.log(response.data)
          setposterList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])
  


    function viewPosterList() {
      return posterlist.map((currentrow, index) => {
        return (
        
          <div className="col" >
          <div className="card" key={index}>
              <h1>{currentrow.foodname}</h1>
              <p className="id">Food ID: {currentrow.foodid}</p>
              <p>Customar Name: {currentrow.customername}</p>
              <p>Customar Email: {currentrow.customeremail}</p>
              <p>Order Date: {currentrow.orderdatetime}</p>
              <p><em>Status:</em> {currentrow.status}</p>
              <p><button type="submit" className="btn btn-secondary" onClick={() =>  MoveToStatus(currentrow.requestid) }><em>STATUS</em></button></p>
          </div>
          </div>
        );
      });
    }

    function MoveToStatus(rid) {
      console.log("Create Object")
      setStatus(false)
      setId(rid)

      
      console.log("Parameter Passed")

}
if (status === true) {
  return (
    <div>
      <NavigationBar />
      <br />
      <h3>ALL Food Menu</h3>
<div>
         {viewPosterList()}
</div>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <Footer/>
   </div>
  )
}else{
  return(
    <div>
    <StatusPoster id = {id}/>
  </div>
  )
}

}

export default PosterDisplay
