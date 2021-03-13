import React, { useState} from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'
import Footer from './footer';

function  StatusPoster(pram) {

    const [requestid,updateReqId]=useState(pram.id);
    const [status,updateStatus]=useState("");

    const onChangeStatus = (e) => updateStatus(e.target.value);

    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(`REQUEST ID: ${requestid}`);
      console.log(`STATUS : ${status}`);

    const updateordinfo = {

      requestid: requestid,
      status : status
  }

    axios.put('/special/status_update', updateordinfo)
    .then(res => {
        console.log(res.data)
        console.log("abcd")
        
    });

    updateReqId("")
    updateStatus("")

  }
  
  return (
    <div>
    <NavigationBar />
    <br />
    <h3>STATUS UPDATE</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={requestid}
                    readOnly />
                <br /><br />
                <select value={status} onChange={onChangeStatus}>
                    <option value="">..SELECT..</option>
                    <option value="ACCEPT">ACCEPT</option>
                    <option value="REJECT">REJECT</option>
                </select>
                <br /><br />
                <input type="submit" value="SUBMIT" className="btn btn-success" />
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
</div>
  )

}
export default StatusPoster