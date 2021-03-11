import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import DisplayProduct from "./displayProductsUserAfterLogin";
import NavigationBar from './NavigationBar';
import Footer from './footer';

function Order(props)  {

  const [productname, setProSpe] = useState("");
  const [productcat, setProCat] = useState("");
  const [productdesc, setProDes] = useState("");
  const [productprice, setProCost] = useState("");
  const [productPicture, setProFile] = useState("");
  const [productid, setProId] = useState("");
  const productquantity = 1;
  const [useremail, setUserEmail] = useState(sessionStorage.getItem("useremail"))
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true)
  const [foodowner, setFoodOwner] = useState("");
  const [foodowneremail, setFoodOwnerEmail] = useState("");

  const [customarname, setCustomarName] = useState("")
  const [customaremailid, setCustomarEmailId]= useState("");
  const [customarphone, setCustomarPhone] = useState("");
  const [customaraddress, setCustomarAddress] = useState("");
  const [customarpin, setCustomarPin]= useState("");
  const [customarcountry, setCustomarCountry]= useState("");

  useEffect(() => {
    axios.get('/user/search/'+ useremail)
      .then(response => {
        console.log(response.data);
        
        const {empname,empemail,empmobile,empcountry,empaddress,emppin} = response.data[0]
        setCustomarAddress(empaddress)
        setCustomarEmailId(empemail)
        setCustomarPhone(empmobile)
        setCustomarName(empname)
        setCustomarCountry(empcountry)
        setCustomarPin(emppin)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

    const onChangeCusName = (e) => setCustomarName(e.target.value);
    const onChangeCusEmail = (e) => setCustomarEmailId(e.target.value);
    const onChangeCusMobile = (e) => setCustomarPhone(e.target.value);
    const onChangeCusAddress = (e) => setCustomarAddress(e.target.value);
    const onChangeCusPin = (e) => setCustomarPin(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setMessage("Address Submitted")
        console.log(`Address submitted:`);
        console.log(`Customar Name : ${customarname}`);
        console.log(`Customar Email ID : ${customaremailid}`);
        console.log(`Customar Mobile: ${customarphone}`);
        console.log(`Customar Address: ${customaraddress}`);
        console.log(`Customar Pin: ${customarpin}`);


        const orderinfo = {
            customarname: customarname,
            customaremailid: customaremailid,
            customarphone: customarphone,
            customaraddress: customaraddress,
            customarpin: customarpin,
            foodowner:foodowner,
            foodowneremail:foodowneremail,
            foodid : productid,
            foodcat: productcat,
            foodname : productname,
            fooddesc: productdesc,
            foodprice : productprice,
            foodquantity: productquantity,
            foodPicture: productPicture
      }
          console.log(orderinfo)
          axios.post('/food/orderlist', orderinfo)
                    .then(res => {
                        console.log(res.data)
                        alert("Added to OrderList")  
                        setStatus(false)
                        
                    }).catch(err => console.log(err));

                    setCustomarName('')
                    setCustomarEmailId('')
                    setCustomarPhone('')
                    setCustomarAddress('')
                    setCustomarPin('')
        }


        useEffect(() => {
            axios.get('/restfood/search/' + props.id)
                .then(response => {
                    console.log(response.data)
                    const {restfoodid,restfoodcat, restfoodspe,foodowner,foodowneremail, restfooddes, restfoodcost,restfoodfile} = response.data[0]
                    setProSpe(restfoodspe)
                    setProCat(restfoodcat)
                    setProDes(restfooddes)
                    setProCost(restfoodcost)
                    setProId(restfoodid)
                    setProFile(restfoodfile)
                    setFoodOwner(foodowner)
                    setFoodOwnerEmail(foodowneremail)
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [])



        if(status === true){
        return (
            <div className="container">
                {/* <NavigationBar/> */}
            <div className="row">
                <Card>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>Add Address</h3>
                    <h4 style={{ color: "brown" }}> {msg}</h4>
                    <div>
                    <input type="text" value={customarname}
                    onChange={onChangeCusName} placeholder="Enter Your Name"
                    required />
                <br /><br />

                <input type="email" value={customaremailid}
                    onChange={onChangeCusEmail} placeholder="Enter Your Email"
                    required />
                <br /><br />

                <input type="number" value={customarphone}
                    onChange={onChangeCusMobile} placeholder="Enter Your Mobile No"
                    required />
                <br /><br />
                
                <textarea value={customaraddress}  placeholder="Enter Your Address"
                    onChange={onChangeCusAddress} rows="3" >
                </textarea>
                <br /><br />
                </div>
                <div>
                <input type="number" value={customarpin}
                    onChange={onChangeCusPin} placeholder="Enter Your Pin No"
                    required />
                </div>
                <br/><br/>
                <div className="form-group">
                        <button className="btn btn-primary" type="submit">Save Address</button>
                </div>
                </form>
                </Card>
            </div>
            {/* <Footer/> */}
        </div>
        );

    }
    else{
        return(
            <div>
            <DisplayProduct/>
            </div>
        )
    }
    
}

    export default Order;
