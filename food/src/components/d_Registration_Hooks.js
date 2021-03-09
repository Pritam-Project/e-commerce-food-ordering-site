import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function Registration() {

    const [rname, setRestName] = useState("");
    const [remail, setRestEmail] = useState("");
    const [rmobile, setRestmobile] = useState("");
    const [rpass, setRestPass] = useState("");
    const [rcountry, setRestCountry] = useState("");
    const [raddress, setRestAddress] = useState("");
    const [rabout, setRestAbout] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeRestName = (e) => setRestName(e.target.value);
    const onChangeRestEmail = (e) => setRestEmail(e.target.value);
    const onChangeRestMobile = (e) => setRestmobile(e.target.value);
    const onChangeRestPass = (e) => setRestPass(e.target.value);
    const onChangeRestCountry = (e) => setRestCountry(e.target.value);
    const onChangeRestAddress = (e) => setRestAddress(e.target.value);
    const onChangeRestAbout = (e) => setRestAbout(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${rname}`);
        console.log(`EMAIL: ${remail}`);

        sessionStorage.setItem("Restaurant Name",rname)
        sessionStorage.setItem("Restaurant Address",raddress)
        sessionStorage.setItem("Restaurant Phone",rmobile)
        sessionStorage.setItem("Restaurant EmailId",remail)

        const restinfo = {
            restname: rname,
            restemail: remail,
            restmobile: rmobile,
            restpass: rpass,
            restcountry: rcountry,
            restaddress: raddress,
            about:rabout
        }

        axios.post('/rest/regpasswordencrypt/restaurant', restinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL..CHECK EMAIL')
            });

        setRestName('')
        setRestEmail('')
        setRestmobile('')
        setRestPass('')
        setRestCountry('')
        setRestAddress('')
        setRestAbout('')
        
        

    }

    return (
        <div>
            <NavigationBar />
            <br />
            <div className="container">
            <h3>RESTAURANT REGISTRATION FORM</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>

            <label>RESTAURANT NAME : </label>
                <input type="text" value={rname}
                    onChange={onChangeRestName} placeholder="Enter Name"
                    required />
                <br /><br />

                <label>RESTAURANT EMAIL ID : </label>
                <input type="email" value={remail}
                    onChange={onChangeRestEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <label>RESTAURANT MOBILE : </label>
                <input type="number" value={rmobile}
                    onChange={onChangeRestMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />


                <label>PASSWORD : </label>
                <input type="password" value={rpass}
                    onChange={onChangeRestPass} placeholder="Enter Password"
                    required />
                <br /><br />


                <label>Country : </label>
                <select value={rcountry} onChange={onChangeRestCountry}>
                    <option value="SELECT COUNTRY">SELECT</option>
                    <option value="AF">Afghanistan</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <br /><br />


                <label>ADDRESS : </label> <br />
                <textarea value={raddress}
                    onChange={onChangeRestAddress} rows="3" >
                </textarea>
                <br /><br />
                

                <label>ABOUT : </label> <br />
                <textarea value={rabout}
                    onChange={onChangeRestAbout} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="REGISTER" className="btn btn-primary" />
            </form>

            </div>
        </div>
    )
}


export default Registration
