import React, { useState } from 'react'
import NavigationBar from './NavigationBar';
import Footer from './footer';
function OTPCheck(props) {
    const [otpno, setOTPNo] = useState("");
    const [msg, setMessage] = useState("");;

    const onChangeOTPNo = (e) => setOTPNo(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (otpno === "123") { 
            props.history.push('/userafterlogin')
        }
        else {
            setMessage('INVALID OTP')
        }

        setOTPNo('')
    }

    return (
        <div>
            <NavigationBar/>
        <div className="card">
<div className="card-body">

<div className="form-header blue accent-1">
<h3><i class='fas fa-edit fa-spin fa-lg'></i>ENTER OTP</h3>
</div>
   <br />

   <b style={{ color: "red" }}> {msg} </b>
   <form onSubmit={handleSubmit}>
       <input type="text" value={otpno}
           onChange={onChangeOTPNo}
           placeholder="Enter OTP"
           required />
       <br /><br />

       <input type="submit" value="CHECK OTP" className="btn btn-success" />
   </form>
</div>
</div>
<Footer/>
</div>
    )
}

export default OTPCheck
