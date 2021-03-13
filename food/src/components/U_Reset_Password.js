import React, {useState} from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function ResetPassword(props)
{
    let designerEmail= sessionStorage.getItem("abc")

    const [epass, setEmpPass] = useState("");
    const [reenterpass, setEmpRePass] = useState("");

    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
   const onChangeEmpRePass = (e) => setEmpRePass(e.target.value);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (epass === reenterpass)
        {
            const empinfo = {

                emppass: epass,
                empmail: designerEmail
                
        
            }
            axios.put('/user/update/pass/', empinfo)
        .then(res => {
           
            props.history.push('/login')
            alert('Password changed... Now login.')
        });
        
           
        }
        else
        { 
           
            alert("not matched")
        }

       

    setEmpPass('')
    setEmpRePass('')

    }



    return (
        <div>
            <NavigationBar/>
        <div className="card">
       <div className="card-body">
 
   <div className="card-header blue accent-1">
   <h3><i class='fas fa-address-card fa-spin fa-lg'></i>CHANGE PASSWORD</h3>
   </div>
     <form onSubmit={handleSubmit}>

           <input type="password" value={epass} onChange={onChangeEmpPass} placeholder="Enter Password"
               required />
               <br /><br />

                <input type="password" value={reenterpass} onChange={onChangeEmpRePass} placeholder="Re-enter Password"
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

export default ResetPassword