import React , {useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function AdminAddNewPoster()  {

    const [posterSpec, setProSpe] = useState("");
    const [posterDesc, setProDes] = useState("");
    const [posterCost, setProCost] = useState("");
    const [posterCat, setProCat] = useState("");
    const [msg, setMessage] = useState("");


    const onChangeProDes = (e) => setProDes(e.target.value);
    const onChangePosterSprc = (e) => setProSpe(e.target.value);
    const onChangeProCost = (e) => setProCost(e.target.value);
    const onChangeProCat = (e) => setProCat(e.target.value);

    //const onChangeProFile = (e) => setProFile(e.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const adminEmail = sessionStorage.getItem("adminemail")
        console.log(`Product submitted:`);
        console.log(`Specification: ${posterSpec}`);
        console.log(`Description: ${posterDesc}`);
        console.log(`Product Cost: ${posterCost}`);
       // console.log(`Product File: ${profile}`);

        const adminfoodAdd = {
            foodSpecification:  posterSpec,
            foodDescription:  posterDesc,
            foodPrice: posterCost,
            adminemail:adminEmail,
            catagory:posterCat,
           // desprofile: profile
        }

        axios.post('/admin/addfood', adminfoodAdd)
            .then(() => {
                //console.log(res.data)
                alert('Poster Added Successfully')
                setMessage('Poster Added Successfully')
            });
           
        setProCost('')
        setProDes('')
        setProSpe('')
        setProCat('')
        }

        return (
            <div>
                <NavigationBar/>
                <div className="card">
                <div className="card-body">
        
                    <div className="form-header blue accent-1">
                    <h3><i className='fas fa-highlighter fa-lg'></i>ADD NEW MENU</h3>
                    </div>
                    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h4 style={{ color: "teal" }}> {msg}</h4>

                        <div>
                        <label htmlFor="text"><b>Food Catagory</b></label><br/>
                        <input type="text" placeholder="Poster Description" 
                        value = {posterCat}  onChange={onChangeProCat}  required/>
                        </div>

                        <div>
                        <label htmlFor="text"><b>Food Specification</b></label><br/>
                        <input type="text" placeholder="Enter Spicification" 
                        value = {posterSpec}  onChange={onChangePosterSprc}  required/>
                        </div>
                        <br/>
                        <div>
                        <label htmlFor="text"><b>Food Description</b></label><br/>
                        <input type="text" placeholder="Poster Description" 
                        value = {posterDesc}  onChange={onChangeProDes}  required/>
                        </div>

                        <br/>
                        <div>
                        <label htmlFor="text"><b>Food Price</b></label><br/>
                        <input type="text" placeholder="Enter Poster Price" 
                        value = {posterCost}  onChange={onChangeProCost}  required/>
                        </div>
                        <br/>
                        {/* <div className="form-group">
                            <input type="file" value = {profile}  
                            onChange={onChangeProFile} required/>
                        </div> */}
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Add New Product</button>
                        </div>
                    </form>
                 
                </div>
            </div>
            <Footer />
            </div>
        );
    
}

    export default AdminAddNewPoster;
