import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function AdminUpdatePoster(props)  {

    const [posterSpec, setPosterSpec] = useState("");
    const [posterDesc, setPosterDesc] = useState("");
    const [posterCost, setPosterCost] = useState("");
    const [proid, setPosterId] = useState("");
    const [msg, setMessage] = useState("");
    const [posterCat, setPosterCat] = useState("");
    

    const onChangeProDes = (e) => setPosterDesc(e.target.value);
    const onChangeProCat = (e) => setPosterCat(e.target.value);
    const onChangeProSpe = (e) => setPosterSpec(e.target.value);
    const onChangeProCost = (e) => setPosterCost(e.target.value);
    const onChangeProID = (e) => setPosterId(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const AdminfoodUpdate = {
            adminid:proid, 
            foodSpecification: posterSpec,
            foodDescription: posterDesc,
            foodPrice:posterCost,
            catagory:posterCat
        }

        axios.put('/admin/food/update' , AdminfoodUpdate)
            .then(res => {
                console.log(res.data)
                alert('Product Update SUCCESSFUL')
                setMessage('Updated')
                
            });

        setPosterCost('')
        setPosterDesc('')
        setPosterSpec('')
        setPosterId('')
        setPosterCat('')
        }


        useEffect(() => {
            let id = sessionStorage.getItem('Product ID')
            if (id == null)
                id = props.id
            axios.post('/admin/search/'+id)
                .then(response => {
                    console.log(response.data)
                    const {restfoodid,restfoodcat, restfoodspe, restfooddes,restfoodcost} = response.data[0]
                    setPosterSpec(restfoodspe)
                    setPosterDesc(restfooddes)
                    setPosterCost(restfoodcost)
                    setPosterId(restfoodid)
                    setPosterCat(restfoodcat)
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [props.id])




        return (
            <div>
                <NavigationBar/>
            
            <div className="container">
                <div className="row">
                    <Card>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h3>Update Food</h3>
                        <h4 style={{ color: "teal" }}> {msg}</h4>
                        <div>
                        <input type="hidden"  
                    value = {proid}  onChange={onChangeProID}  readOnly/>
                        </div>
                        <div>
                        
                        <label htmlFor="text"><b>Food Specification</b></label><br/>
                        <input type="text" placeholder="Enter Spicification" 
                        value = {posterSpec}  onChange={onChangeProSpe}  required/>
                        </div>
                        <br/>
                        <div>
                        
                        <label htmlFor="text"><b>Food Catagory</b></label><br/>
                        <input type="text" placeholder="Enter Catagory" 
                        value = {posterCat}  onChange={onChangeProCat}  required/>
                        </div>
                        <div>
                        <label htmlFor="text"><b>Food Description</b></label><br/>
                        <input type="text" placeholder="Food Description" 
                        value = {posterDesc}  onChange={onChangeProDes}  required/>
                        </div>
                        <br/>
                        <div>
                        <label htmlFor="text"><b>Food Price</b></label><br/>
                        <input type="text" placeholder="Enter Food Price" 
                        value = {posterCost}  onChange={onChangeProCost}  required/>
                        </div>
                        <br/>
                        
                        <div className="form-group">
                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </form>
                    </Card>
                </div>
            </div>
            <Footer/>
            </div>
        );
    
}
export default AdminUpdatePoster