import React, { useState } from 'react'
// import axios from 'axios';
//import NavigationBar from './NavigationBar';
// import {Link} from 'react-router-dom'
import NavigationBar from './NavigationBar';
import Footer from './footer';


function AdminLogin(props) {
  const [adminMail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [msg, setMessage] = useState("");
 

  const onChangeEmpEmail = (e) => setAdminEmail(e.target.value);
  const onChangeEmpPass = (e) => setAdminPass(e.target.value);
  
  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

   if(adminMail === "a@a.com" && adminPass === "a")
   {
    setMessage("Logged in")
    sessionStorage.setItem("Key_Veriable","ADMIN")
    sessionStorage.setItem("adminemail",adminMail)
    props.history.push('/')
   }

   else{
    setMessage("error")
   }

    setAdminEmail('')
    setAdminPass('')
    
  }

  
    return (
      <div >
        <NavigationBar/>
        <br /> 
        <h3>WELCOME TO ADMIN LOGIN</h3>
        <b style={{ color: "red" }}> {msg} </b>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" value={adminMail}
            onChange={onChangeEmpEmail}
            placeholder="Enter Email"
            required />
          <br /><br />

          <input type="password" value={adminPass}
            placeholder="Enter Password"
            onChange={onChangeEmpPass}
            required />
          <br /><br />
          
          <input type="submit" value="LOGIN" className="btn btn-danger" />
        </form>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  

export default AdminLogin