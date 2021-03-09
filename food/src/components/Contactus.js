//This part is done by pappu mondal
import React, { useState } from 'react'
import axios from 'axios';
import './comm.css'
import { Link } from 'react-router-dom';
import Footer from './footer';
import NavigationBar from './NavigationBar';

function Contactus() {
         const [ename, setEmpName] = useState("");
         const [eemail, setEmpEmail] = useState("");
         const [emobile, setEmpMobile] = useState("");
         const [emessage, setEmpMessage] = useState("");
         const [msg, setMessage] = useState("");

         const onChangeEmpName = (e) => setEmpName(e.target.value);
         const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
         const onChangeEmpMobile = (e) => setEmpMobile(e.target.value);
         const onChangeEmpMessage = (e) => setEmpMessage(e.target.value);

         const handleSubmit = (evt) => {
          evt.preventDefault();
          console.log(`Form submitted:`);
          console.log(`NAME: ${ename}`);
          console.log(`EMAIL: ${eemail}`);
         

         const empinfo = {
          empname: ename,
          empemail: eemail,
          empmobile: emobile,
          empmessage: emessage,
         }

         axios.post('http://localhost:4500/emp/contactus', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Message Submitted')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpMobile('')
        setEmpMessage('')
        }


return (

  
  <section className="section pb-5">
  <NavigationBar />
    <h2 className="section-heading h1 pt-4">Contact us</h2>
    <p className="section-description pb-4">help us to give you a good Shopping Exprience</p>
  
    <div className="row">
      <div className="col-lg-5 mb-4">
        <div className="card">
  
          <div className="card-body">
          
            <div className="form-header blue accent-1">
              <h3><i className="fas fa-envelope"></i> Write to us:</h3>
            </div>
  
            <p>We'll write rarely, but with only the best content.</p>
            <h4 style={{ color: "brown" }}> {msg}</h4>

            <form onSubmit={handleSubmit}>
        
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text"  id="defaultFormContactNameEx" className="form-control" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required/>
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required/>
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Mobile No.
        </label>
        <input type="number" id="defaultFormContactMobileEx" className="form-control" value={emobile}
                    onChange={onChangeEmpMobile} placeholder="Enter Mobie No."
                    required/>
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" value={emessage}
                    onChange={onChangeEmpMessage} placeholder="Enter Message"
                    required/>
        <div className="text-center mt-4">
                  <button color="warning" outline type="submit">
                    Send
                  </button>
                </div>
              </form>
          </div>
  
        </div>
    
      </div>
      
      <div className="col-lg-7">
  
        <div id="map-container-google-11" className="z-depth-1-half map-container-6" style={{height: '400px'}}>
          <iframe title="abcd" src="https://maps.google.com/maps?q=gargi-memorial-institute-of-technology&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" style={{border: '0'}} allowfullscreen></iframe>
        </div>
  
  <br/>
        
        <div class="row text-center">
          <div class="col-md-4">
            <Link class="btn-floating blue accent-1"><i class="fas fa-map-marker-alt"></i></Link>
            <p>Baruipur, Pin - 700144</p>
            <p>West Bengal</p>
          </div>
  
          <div class="col-md-4">
            <Link class="btn-floating blue accent-1"><i class="fas fa-phone"></i></Link>
            <p>+918785125287</p>
            <p>TuesDay-SaturDay, 8:00-18:00</p>
          </div>
  
          <div class="col-md-4">
            <Link class="btn-floating blue accent-1"><i class="fas fa-envelope"></i></Link>
            <p>info@gmail.com</p>
            <p>gmit@gmail.com</p>
          </div>
        </div>
  
      </div>
      
    </div>
    <Footer />
  </section>
  
    )}

    export default Contactus;