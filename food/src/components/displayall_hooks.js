import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import Footer from './footer';
import NavigationBar from './NavigationBar';


function DisplayAll() {
  const [commentlist, setCommentList] = useState([]);
  const [status, setStatus] = useState("show")
  const [category, setCategory] = useState('')
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

  function viewCommentList() {
    return commentlist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.name}</td>
          <td>{currentrow.category}</td>
          <td>{currentrow.subject}</td>
          <td>{currentrow.comment}</td>
          <td>{currentrow.country}</td>
          <td>{currentrow.commentdatetime}</td>
        </tr>
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
      {/* <NavBar/> */}
      <NavigationBar />
      <b>{msg}</b>
    <br />
    <h3>ENTER CATEGORY FOR SEARCH</h3>
    <form onSubmit={handleSubmit}>
    <select required value={category} onChange={onChangeCategory}>
                    <option value="choosecategory">choose category</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Baryani">Baryani</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Kashimiri">Kashimiri</option>

                </select>
      <br />
      <br />
      <input type="submit" value="SEARCH CATEGORY" className="btn btn-success" />
    </form>
      <br />
      <h3>ALL COMMENT DETAILS</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Subject</th>
            <th>COMMENT</th>
            <th>COUNTRY</th>
            <th>Time&Date</th>
          </tr>
        </thead>

        <tbody>
          {viewCommentList()}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <button type="submit" className="btn btn-primary" onClick={() => UserPost() }>Post your Comment</button>
      <br /> <br/><br/>
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