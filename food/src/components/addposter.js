import React , {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function Addposter()  {

    const [procat, setProCat] = useState("");
    const [prospe, setProSpe] = useState("");
    const [prodes, setProDes] = useState("");
    const [procost, setProCost] = useState("");
    const [prosize, setProSize] = useState("");
    const [msg, setMessage] = useState("");

    
    const person = sessionStorage.getItem("Key_Veriable")
    const email = sessionStorage.getItem("restemail")

    const onChangeProDes = (e) => setProDes(e.target.value);
    const onChangeProSpe = (e) => setProSpe(e.target.value);
    const onChangeProCat = (e) => setProCat(e.target.value); 
    const onChangeProCost = (e) => setProCost(e.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Product submitted:`);
        console.log(`Catagory: ${procat}`);
        console.log(`Specification: ${prospe}`);
        console.log(`Description: ${prodes}`);
        console.log(`Product Cost: ${procost}`);
        console.log(`Size: ${prosize}`);
        // console.log(`Product File: ${profile}`);

        const restinfo = {
            foodowner: person,
            foodowneremail:email,
            restfoodspe:prospe,
            restfoodcat:procat,
            restfooddes:prodes,
            restfoodcost:procost,
            // restfoodfile:profile
        }

        axios.post('http://localhost:4500/restfood/add', restinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Product Add SUCCESSFUL')
            });

        setProCost('')
        setProCat('')
        setProDes('')
        setProSpe('')
        setProSize('')
        // setProFile('')
        }
// Checking for Designer Access
        let authuser = sessionStorage.getItem('Key_Veriable')
         console.log(authuser)
         if (authuser === "RESTAURANT") {
            return (
                <div>
                    <NavigationBar />
                <div className="container">
                    
                    <div className="row">
                        <div className="card">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <h3>Add New Food</h3>
                            <h4 style={{ color: "brown" }}> {msg}</h4>
                            <div>
                            <label ><b>Food Catagory</b></label><br/>
                            <input type="text" placeholder="Enter Catagory" 
                            value = {procat}  onChange={onChangeProCat}  required/>
                            </div>
                            <br/>
                            <div>
                            <label ><b>Food Specification</b></label><br/>
                            <input type="text" placeholder="Enter Spicification" 
                            value = {prospe}  onChange={onChangeProSpe}  required/>
                            </div>
                            <br/>
                            <div>
                            <label ><b>Food Description</b></label><br/>
                            <input type="text" placeholder="Enter Description" 
                            value = {prodes}  onChange={onChangeProDes}  required/>
                            </div>
                            <br/>
                            <div>
                            <label ><b>Food Cost</b></label><br/>
                            <input type="text" placeholder="Enter Cost" 
                            value = {procost}  onChange={onChangeProCost}  required/>
                            </div>
                            <br/>
                            <br/>
                            {/* <div className="form-group">
                            <label ><b>Food Image</b></label><br/>
                                <input type="file" value = {profile}  
                                onChange={onChangeProFile} required/>
                            </div> */}
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Upload Product</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <Footer />
                </div>
            );
            
         }
        else {
            return (<Redirect to="/designerlogin" />)
        
      }
}

    export default Addposter;
