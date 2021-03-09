//This part is done by ankita biswas
import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import {Link} from 'react-router-dom'
import {  Button } from 'react-bootstrap';
import Footer from './footer';

function UserLogin(props) {
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");
  

  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(false);
 

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);
  
  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

   

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('http://localhost:4500/user/logincheck/a', emplogininfo)
      .then(res => {
        
        if(res.data === "fail"){
          alert("INVALID UID or PASSWORD")
        }

        else{
      sessionStorage.setItem("Key_Veriable", 'USER')
      sessionStorage.setItem("useremail", eemail)
      sessionStorage.setItem("authuser",'USER')
      sessionStorage.setItem("username", res.data[0].empname)
      sessionStorage.setItem("country", res.data[0].empcountry)
      
      props.history.push('/')
      }
      })
      .catch(err => {
        
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
    
  }

  

  if (status === false) {
    return (
      <div >
        <NavigationBar />
        <br /> 
      <div className="container">
        <h3>USER LOGIN</h3>
        <b style={{ color: "red" }}> {msg} </b>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" value={eemail}
            onChange={onChangeEmpEmail}
            placeholder="Enter Email"
            required />
          <br /><br />

          <input type="password" value={epass}
            placeholder="Enter Password"
            onChange={onChangeEmpPass}
            required />
          <br /><br />          
          <input type="submit" value="LOGIN" className="btn btn-success" />
        </form>
        <br/><br/>
        <div className="forgot-password text-center">
        <Link to="/U_forgot_Pass"> <Button bsStyle="primary"> Forgot password?</Button></Link>
        </div>
        </div>
        <br/><br/><br/><br/><br/><br/>
        <Footer />
      </div>
    )
  }
  
}

export default UserLogin
