//This part is done by pappu mondal
import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';


function footer(){
    return(
        <footer className="text-white" style= {{backgroundColor :"#1B1B47"}}>
            <div className="container  text-left py-3">
                <div className="row">
                    
                    <div className="col-md-2">
                    <h6>ABOUT</h6>
                    <ul className = "list-unstyled">
                    <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Careers</Link></li>    
                    </ul>
                    </div>

                    <div className = "col-md-2">
                    <h6>HELP</h6>
                    <ul className ="list-unstyled">
                        <li><Link to="">Payment</Link></li>
                        <li><Link to="">Shipping</Link></li>
                        <li><Link to="">Cancellation & Returns</Link></li>
                        <li><Link to="">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className = "col-md-2">
                    <h6>POLICY</h6>
                    <ul className ="list-unstyled">
                        <li><Link to="">Return Policy</Link></li>
                        <li><Link to="">Terms of Use</Link></li>
                        <li><Link to="">Security</Link></li>
                        <li><Link to="">Privacy</Link></li>
                        <li><Link to="">Sitemap</Link></li>
                        </ul>
                    </div>

                    <div className = "col-md-2">
                    <h6>SOCIAL</h6>
                    <ul className="list-unstyled">
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Twitter</Link></li>
                        <li><Link to="">Instagram</Link></li>
                    </ul>
                    </div>

                    <div className = "col-md-2 ">
                    <h6>Mail Us:</h6>
                    <p>abc@gmail.com</p>
                    </div>

                    <div className = "col-lg-2 pb-2">
                    <h6>Office Address:</h6>
                    <p>Xyz Private Limited,
                        Kolkata, India
                        </p>
                    </div>

                 

                </div>
            </div>
            <div className ="container-fluid text-center" style= {{backgroundColor :"#A4A4B0"}}>
                &copy; 2020. All rights are reserved. 
            </div>
        </footer> 
        
    );
    
}
export default footer;