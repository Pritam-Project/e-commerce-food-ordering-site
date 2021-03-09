import React, {useState} from 'react'
import axios from 'axios';

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
            axios.put('http://localhost:4500/rest/update/pass/restaurant', restinfo)
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
          <form onSubmit={handleSubmit}>
              <h3>CHANGE PASSWORD</h3>

                <input type="password" value={rpass} onChange={onChangeRestPass} placeholder="Enter Password"
                    required />
                    <br /><br />

                     <input type="password" value={reenterpass} onChange={onChangeRestRePass} placeholder="Re-enter Password"
                    required />
                    <br /><br /> 


                <input type="submit" value="CHANGE" className="btn btn-primary" />


            </form>
        </div>

    )


}

export default NewPassword