import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import {Link} from 'react-router-dom'
import {  Button } from 'react-bootstrap';
import Footer from './footer';

function UserLogin(props) {
  const [remail, setRestEmail] = useState("");
  const [rpass, setRestPass] = useState("");
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(false);


  const onChangeRestEmail = (e) => setRestEmail(e.target.value);
  const onChangeRestPass = (e) => setRestPass(e.target.value);

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();

    const restlogininfo = {
      restemail: remail,
      restpass: rpass
    }

    axios.post('/rest/logincheck/a/restaurant', restlogininfo)
      .then(res => {
        if(res.data === "fail"){
          alert("Wrong")
        }
        else{
      sessionStorage.setItem("Key_Veriable", 'RESTAURANT')
      sessionStorage.setItem("restemail", remail)
      sessionStorage.setItem("authuser",'RESTAURANT')
      sessionStorage.setItem("restname", res.data[0].restname)
      
      props.history.push('/')
      }
      })
      .catch(err => {
        
        setMessage('INVALID UID OR PASSWORD')
      })
    setRestEmail('')
    setRestPass('')
    
  }


  if (status === false) {
    return (
      <div>
        <NavigationBar />
        <br /> 
        <div className="card">
          <div className="card-body">
            <div className="card-header blue accent-1">
            <h3><i class='fas fa-eye fa-lg'></i>RESTAURANT LOGIN</h3>
            </div>
        <b style={{ color: "red" }}> {msg} </b>
        <br/>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" value={remail}
            onChange={onChangeRestEmail}
            placeholder="Enter Restaurant Email"
            required />
          <br /><br />
          <input type="password" value={rpass}
            placeholder="Enter Password"
            onChange={onChangeRestPass}
            required />
          <br /><br />
          <input type="submit" value="LOGIN" className="btn btn-success" />
          <br/><br/>
          <div className="forgot-password text-center">
          <Link to="/forgot_Pass"> <Button bsStyle="primary"> Forgot password?</Button></Link>
          </div>
        </form>
      </div>
      <div className='card-footer'>
        <Link to="/restaurantreg" className="nav-link" id="signup"><i className="fas fa-user-plus fa-lg"></i><em> New User? Sign UP!</em></Link>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
        <Footer />
      </div>

    )
  }
  
}

export default UserLogin
