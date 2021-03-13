import React, {useState} from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function NewPassword(props)
{

    let restaurantEmail= sessionStorage.getItem("EMAIL")
    
    const [rpass, setRestPass] = useState("");
    const [reenterpass, setRestRePass] = useState("");

    const onChangeRestPass = (e) => setRestPass(e.target.value);
    const onChangeRestRePass = (e) => setRestRePass(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (rpass === reenterpass)
        {
            const restinfo = {

                restpass: rpass,
                restmail: restaurantEmail           
        
            }
            axios.put('/rest/update/pass/restaurant', restinfo)
        .then(res => {
           
            props.history.push('/designerlogin')
            alert('Password changed... Now login.')
        });
             
        }
        else
        { 
            alert("not matched")
        }

    setRestPass('')
    setRestRePass('')
    }

    return (
        <div>
            <NavigationBar/>
        <div className="card">
          <div className="card-body">
            <div className="card-header blue accent-1">
            <h3><i class='fas fa-exclamation-triangle fa-lg'></i>CHANGE PASSWORD</h3>
            </div>
          <form onSubmit={handleSubmit}>
                <input type="password" value={rpass} onChange={onChangeRestPass} placeholder="Enter Password"
                    required />
                    <br /><br />

                     <input type="password" value={reenterpass} onChange={onChangeRestRePass} placeholder="Re-enter Password"
                    required />
                    <br /><br /> 
                <input type="submit" value="CHANGE" className="btn btn-primary" />
            </form>
        </div>
        </div>
     <Footer/>
        </div>
    )

}

export default NewPassword