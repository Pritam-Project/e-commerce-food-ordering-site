import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdatePosterAdmin from './adminUpdatePoster'
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';


function DisplayAdminProductsAlsoOperations() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [category, setCategory] = useState('Choose Admin')
  const [msg, setMessage] = useState("");
  const [status, setStatus ] = useState(true);
  const [id, setId] = useState("");

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
    setMessage('')
  }

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");

      if(productOwner === "ADMIN")
      {
        axios.get('/admin/allfoods')
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

    if(category=="Choose Admin"){

      axios.get('/admin/allfoods')
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    else{

    axios.get('/admin/foods/' + category)
      .then(res => {
        console.log(res.data)
        setProList(res.data)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID CATEGORY')
      })

    setCategory('')
    }
  }

  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
        <div className="col" >
        <div className="card" key={index}>
        <div className = 'card-header'>
           <h1>{index +1}</h1>
           </div>
            <h1>{currentrow.restfoodspe}</h1>
            <p className="price">Food Price: {currentrow.restfoodcost}</p>
            <p>Food Catagory: {currentrow.restfoodcat}</p>
            <p>Food Description: {currentrow.restfooddes}</p>
            <p>Food Owner Email: {currentrow.foodowneremail}</p>
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
    <b>{msg}</b>
    <br />
    <div className='card'>
    <h3>SELECT FOOD ADMIN</h3>
    <form onSubmit={handleSubmit}>
    <select required value={category} onChange={onChangeCategory}>
                    <option value="Choose Admin">Choose Admin</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="RESTAURANT">RESTAURANT</option>
                </select>
      <br />
      <br />
      <input type="submit" value="SEARCH" className="btn btn-success" />
    </form>
    <br/>
    </div>
      <hr/>
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