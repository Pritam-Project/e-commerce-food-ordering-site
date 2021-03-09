//This poster is done by tapai
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import StatusPoster from './Status_Poster';
import Footer from './footer';

function PosterDisplay() {
    const [posterlist, setposterList] = useState([]);
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [status,setStatus ] = useState(true);
  
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('http://localhost:4500/special/ordfood')
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
          <tr key={index}>
            <td>{currentrow.requestid}</td>
            <td>{currentrow.foodid}</td>
            <td>{currentrow.foodname}</td>
            <td>{currentrow.customername}</td>
            <td>{currentrow.customeremail}</td>
            <td>{currentrow.orderdatetime}</td>
            <td>{currentrow.status}</td>

            <td><button type="submit" className="btn btn-secondary" onClick={() =>  MoveToStatus(currentrow.requestid) }>STATUS</button></td>
            
          </tr>
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
        <h3>ALL POSTER DETAILS DETAILS</h3>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>Request Id</th>
              <th>Poster Id</th> 
              <th>Poster Name</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Order DateTime</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            {viewPosterList()}
          </tbody>
        </table>
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
