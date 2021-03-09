import React , {useState} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

function PayNow()  {
    const [customarname, setCustomarName] = useState(sessionStorage.getItem("CustomarName"));
    const [customaremail, setCustomarEmailId] = useState(sessionStorage.getItem("CustomarEmailId"));
    const [customarphone, setCustomarPhone] = useState(sessionStorage.getItem('CustomarPhone'));
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState(true)
    const [response, setResponse] = useState("");

    const onChangeCustomarName = (e) => setCustomarName(e.target.value);
    const onChangeCustomarEmailId = (e) => setCustomarEmailId(e.target.value);
    const onChangeCustomarPhone = (e) => setCustomarPhone(e.target.value); 
    const onChangeAmount = (e) => setAmount(e.target.value);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Payment Request Submitted:`);
        console.log(`Customar Name: ${customarname}`);
        console.log(`Customar EmailID: ${customaremail}`);
        console.log(`Customar Phone: ${customarphone}`);
        console.log(`Payment Amount: ${amount}`);
        

        const paymentinfo = {
            customername: customarname,
            customeremail: customaremail,
            customerphone: customarphone,
            amount: amount
        }

        axios.post('http://localhost:4500/payment/paynow', paymentinfo)
            .then(res => {
                console.log(res.data);
                setResponse(res.data);
                console.log("Data Passed");
                setStatus(false)
            });

        setAmount('')
        setCustomarEmailId('')
        setCustomarName('')
        setCustomarPhone('')
        }

        if(status === true){

        return (
            <div className="row my-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <label >Name: </label>
                            <input className="form-control" onChange={onChangeCustomarName} type="text" required value={customarname}/>
                        </div>
                        <div className="form-group">
                            <label >Email: </label>
                            <input className="form-control" onChange={onChangeCustomarEmailId} type="text" required value={customaremail}/>
                        </div>
                        <div className="form-group">
                            <label >Phone: </label>
                            <input className="form-control" onChange={onChangeCustomarPhone} type="text" required value={customarphone}/>
                        </div>
                            <div className="form-group">
                            <label >Amount: </label>
                            <input className="form-control" onChange={onChangeAmount} type="text" required value={amount}/>
                        </div>
                        <div className="form-group">
                            <button className="btn form-control btn-primary">Pay Now</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
                {ReactHtmlParser(response)}
            </div>
        )
    }
}

export default PayNow;