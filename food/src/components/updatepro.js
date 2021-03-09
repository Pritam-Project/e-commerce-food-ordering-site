import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Updatepro(props)  {

    const [prospe, setProSpe] = useState("");
    const [procat, setProCat] = useState("");
    const [prodes, setProDes] = useState("");
    const [procost, setProCost] = useState("");
    const [prosize, setProSize] = useState("");
    const [profile, setProFile] = useState("");
    const [proid, setProId] = useState("");
    const [msg, setMessage] = useState("");


    const onChangeProDes = (e) => setProDes(e.target.value);
    const onChangeProSpe = (e) => setProSpe(e.target.value);
    const onChangeProCost = (e) => setProCost(e.target.value);
    const onChangeProFile = (e) => setProFile(e.target.value);
    const onChangeProID = (e) => setProId(e.target.value);
    const onChangeProCat = (e) => setProCat(e.target.value);
    const onChangeProSize = (e) => setProSize(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Product submitted:`);
        console.log(`Product ID : ${proid}`);
        console.log(`Product Catagory : ${procat}`);
        console.log(`Specification: ${prospe}`);
        console.log(`Description: ${prodes}`);
        console.log(`Product Cost: ${procost}`);
        console.log(`Product Size : ${prosize}`);
        console.log(`Product File: ${profile}`);

        const desinfo = {
            restfoodid:proid,
            restfoodcat:procat,
            restfoodspe:prospe,
            restfooddes:prodes,
            restfoodcost:procost,
            restfoodfile:profile
        }

        axios.put('/restfood/update' , desinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Product Update SUCCESSFUL')
            });

        setProCost('')
        setProCat('')
        setProDes('')
        setProSize('')
        setProSpe('')
        setProFile('')
        setProId('')
        }


        useEffect(() => {
            let id = sessionStorage.getItem('Product ID')
            if (id == null)
                id = props.id
            axios.get('/restfood/search/' + id)
                .then(response => {
                    console.log(response.data)
                    const {restfoodid,restfoodcat, restfoodspe, restfooddes, restfoodcost} = response.data[0]
                    setProSpe(restfoodspe)
                    setProCat(restfoodcat)
                    setProDes(restfooddes)
                    setProCost(restfoodcost)
                    setProId(restfoodid)
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [])




        return (
            <div className="container">
            <div className="row">
                <Card>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>Update Food</h3>
                    <h4 style={{ color: "brown" }}> {msg}</h4>
                    <div>
                    <label for="text"><b>Food ID</b></label><br/>
                    <input type="text"  
                    value = {proid}  onChange={onChangeProID}  readOnly/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Food Catagory</b></label><br/>
                    <input type="text"  placeholder="Enter Catagory"
                    value = {procat}  onChange={onChangeProCat}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Food Specification</b></label><br/>
                    <input type="text" placeholder="Enter Spicification" 
                    value = {prospe}  onChange={onChangeProSpe}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Food Description</b></label><br/>
                    <input type="text" placeholder="Enter Description" 
                    value = {prodes}  onChange={onChangeProDes}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Food Cost</b></label><br/>
                    <input type="text" placeholder="Enter Cost" 
                    value = {procost}  onChange={onChangeProCost}  required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="file" value = {profile}  
                        onChange={onChangeProFile} required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload Product</button>
                    </div>
                </form>
                </Card>
            </div>
        </div>
        );
    
}

    export default Updatepro;
