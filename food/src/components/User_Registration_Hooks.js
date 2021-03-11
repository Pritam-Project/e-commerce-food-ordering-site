//this part is done by ankita biswas
import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [epass, setEmpPass] = useState("");
    const [epin, setEmpPin] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpPin = (e) => setEmpPin(e.target.value);
    const onChangeEmpCountry = (e) => setEmpCountry(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        sessionStorage.setItem("CustomarName",ename)
        sessionStorage.setItem("CustomarAddress",eaddress)
        sessionStorage.setItem("CustomarPhone",emobile)
        sessionStorage.setItem("CustomarPin",epin)
        sessionStorage.setItem("CustomarEmailId",eemail)

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            emppass: epass,
            empcountry: ecountry,
            empaddress: eaddress,
            emppin:epin
        }

        axios.post('/user/regpasswordencrypt', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL..CHECK EMAIL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpPass('')
        setEmpCountry('')
        setEmpAddress('')
        setEmpPin('')

    }

    return (
        <div >
        <NavigationBar />
        <br />
        <div className="card">
        <div className="card-body">
      
      <div className="form-header blue accent-1">
        <h3><i class='fas fa-address-card fa-spin fa-lg'></i>REGISTRATION FORM </h3>
      </div>
        <h4 style={{ color: "brown" }}> {msg}</h4>
        <form onSubmit={handleSubmit}>
            <input type="text" value={ename}
                onChange={onChangeEmpName} placeholder="Enter Your Name"
                required />
            <br /><br />

            <input type="email" value={eemail}
                onChange={onChangeEmpEmail} placeholder="Enter Your Email"
                required />
            <br /><br />

            <input type="number" value={emobile}
                onChange={onChangeEmpMobile} placeholder="Enter Your Mobile No"
                required />
            <br /><br />

            <input type="password" value={epass}
                onChange={onChangeEmpPass} placeholder="Enter Your Password"
                required />
            <br /><br />

            
            <select value={ecountry} onChange={onChangeEmpCountry}>
                <option value="country">Select Country</option>
                <option value="AF">Afghanistan</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="nepal">Nepal</option>
            </select>
            <br /><br />

            {/* <label>ADDRESS: </label> <br /> */}
            <textarea value={eaddress}  placeholder="Enter Your Address"
                onChange={onChangeEmpAddress} rows="3" >
            </textarea>
            <br /><br />
            <input type="text" value={epin}
                onChange={onChangeEmpPin} placeholder="Enter Your Pin Code"
                required />
            <br /><br />

            <button type="submit" value="REGISTER" className="btn btn-primary" >REGISTER</button>
        </form>
        </div>
        </div>
        <Footer/>
    </div>
    )
}


export default Registration
