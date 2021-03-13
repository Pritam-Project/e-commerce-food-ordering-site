import React, { useState } from 'react'
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
        <div className= "row">
        <div className="col">
        <div className="card">
         <div className="card-body">
          <div className="card-header blue accent-1">
            <h3><i className="fas fa-key fa-spin fa-lg"></i>Admin LogIn </h3>
          </div>
        <b style={{ color: "red" }}> {msg} </b>
        <br/>
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
          
          <button type="submit" value="LOGIN" className="btn btn-danger" >LOGIN</button>
        </form>
        
      </div>
      </div>
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
    </div>
    )
  }
  

export default AdminLogin