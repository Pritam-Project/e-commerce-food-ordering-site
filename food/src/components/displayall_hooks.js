import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import Footer from './footer';
import NavigationBar from './NavigationBar';

function DisplayAll() {
  const [commentlist, setCommentList] = useState([]);
  const [status, setStatus] = useState("show")
  const [category, setCategory] = useState('Choose Category')
  const [msg, setMessage] = useState("");

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
    setMessage('')
  }

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('/comment/viewall')
      .then(response => {
        console.log(response.data)
        setCommentList(response.data);
        setCategory("show")
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(category=="Choose Category"){
      axios.get('/comment/viewall')
      .then(response => {
        console.log(response.data)
        setCommentList(response.data);
        setCategory("show")
      })
      .catch((error) => {
        console.log(error);
      })
    }
    else{

    axios.get('/comment/search/' + category)
      .then(res => {
        console.log(res.data)
        setCommentList(res.data)
        setStatus("show")
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID CATEGORY')
      })

    setCategory('')
    }
  }

  function viewCommentList() {
    return commentlist.map((currentrow, index) => {
      return (
        <div className="col" key={index} >
        <div className="card" >
          <div className = 'card-header'>
           <h1>{index +1}</h1>
           </div>
            <h3>Comment By - </h3><h1>{currentrow.name}</h1>
            <p className="price">Category: {currentrow.category}</p>
            <p>Subject: {currentrow.subject}</p>
            <p>Comment: {currentrow.comment}</p>
            <p>From : {currentrow.country}</p>
            <p>Comment Date : {currentrow.commentdatetime}</p>
        </div>
        </div>
      );
    });
  }
function UserPost(){
  const userpost = sessionStorage.getItem('Key_Veriable')
  console.log(userpost);
  if(userpost==='USER'){
    setStatus(false);
  }
  else{
    setStatus("login");
  }
}

if(status === "show"){
  return (
    <div>
      <NavigationBar />
      <b>{msg}</b>
    <br />
    <div className='card'>
      <div className='card-header'>
    <h3>SELECT CATEGORY</h3></div>
    <form onSubmit={handleSubmit}>
    <select required value={category} onChange={onChangeCategory}>
                    <option value="Choose Category">Choose Category</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Baryani">Baryani</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Kashimiri">Kashimiri</option>
                </select>
      <br />
      <br />
      <button type="submit" value="SEARCH CATEGORY" className="btn btn-success" >SEARCH CATEGORY</button>
    </form>
    </div>
    <br />
      <h3>ALL COMMENT DETAILS</h3>
      <div>
          {viewCommentList()}
          </div>
      <br></br>
      <br></br>
      <br></br>
      <button type="submit" className="btn btn-primary" onClick={() => UserPost() }>Post your Comment</button>
     < br /> <br/><br/><br /> <br/><br/><br /> <br/><br/><br /> <br/><br/>
      <br /> <br/><br/><br/><br /> <br/><br/>
      <Footer />
    </div>
  )
}
else if(status === "login"){
  return (<Redirect to ="/login"/>);
}
else{
  return(<Redirect to ="/post"/>)
}

}


export default DisplayAll