import React , {useState,useEffect} from 'react';
import axios from 'axios';
import CartProduct from "./cartProducts";
import NavigationBar from './NavigationBar';
import Footer from './footer';


function OrderFromCart(props)  {

  const [productname, setProSpe] = useState("");
  const [productcat, setProCat] = useState("");
  const [productdesc, setProDes] = useState("");
  const [productprice, setProCost] = useState("");
  const [productPicture, setProFile] = useState("");
  const [productquantity, setProQuantity] = useState("");
  const [cartproductid, setCartProID] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [productid, setProId] = useState("");
  const [ID, setID] = useState("");
  const[msg, setMessage] = useState("");
  const [status, setStatus] = useState(true)

  const [customarname, setCustomarName] = useState(localStorage.getItem('UserName'))
  const [customaremailid, setCustomarEmailId]= useState(localStorage.getItem('UserEmalId'));
  const [customarphone, setCustomarPhone] = useState(localStorage.getItem('UserPhone'));
  const [customaraddress, setCustomarAddress] = useState(localStorage.getItem('UserAddress'));
  const [customarpin, setCustomarPin]= useState(localStorage.getItem('UserPin'));


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
            foodid : productid,
            foodcat: productcat,
            foodname : productname,
            fooddesc: productdesc,
            foodprice : productprice,
            foodquantity:productquantity,
            foodPicture: productPicture,
      }
          console.log(orderinfo)
          axios.post('/food/orderlist', orderinfo)
                    .then(res => {
                        axios.delete('/food/cart/removeitem/'+ID)
                        console.log(res.data)
                        alert("Added to OrderList")  ;
                        setStatus(false)
                        
                    });

        setCustomarName('')
        setCustomarEmailId('')
        setCustomarPhone('')
        setCustomarAddress('')
        setCustomarPin('')
        
        }


        useEffect(() => {
            axios.get('/food/carts/mycart/search/' + props.id)
                .then(response => {
                    console.log(response.data)
                    const {foodid,useremail, foodcat, fooddesc, cartfoodid,foodname,foodprice,foodquantity,foodPicture,_id} = response.data[0]
                    setProSpe(foodname)
                    setProCat(foodcat)
                    setProDes(fooddesc)
                    setProCost(foodprice)
                    setProId(foodid)
                    setUserEmail(useremail)
                    setProFile(foodPicture)
                    setProQuantity(foodquantity)
                    setCartProID(cartfoodid)
                    setID(_id)
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [])



if(status === true){
        return (
            <div>
                <NavigationBar />
            
            <div className="container">
            <div className="row">
                <div className="card">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>Add Address</h3>
                    <h4 style={{ color: "brown" }}> {msg}</h4>
                    <div>
                    <input type="text" value={customarname}
                    onChange={onChangeCusName} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={customaremailid}
                    onChange={onChangeCusEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={customarphone}
                    onChange={onChangeCusMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />
                <label>ADDRESS: </label> <br />
                <textarea value={customaraddress}
                    onChange={onChangeCusAddress} rows="3" >
                </textarea>
                <br /><br />
                </div>
                <div>
                <input type="number" value={customarpin}
                    onChange={onChangeCusPin} placeholder="Enter Pin No"
                    required />
                </div>
                <br/><br/>
                <div className="form-group">
                        <button className="btn btn-primary" type="submit">Save Address</button>
                </div>
                </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        );
        }
    else{
        return(
            <div>
                <CartProduct/>
            </div>
        )
    }
}

export default OrderFromCart;