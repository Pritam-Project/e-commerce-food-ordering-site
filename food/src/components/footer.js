import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';


function footer(){
    return(
        <footer className="text-white" style= {{backgroundColor :"#2d3e50"}}>
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

                    <div className = "col-md-1">
                    <h6>SOCIAL</h6>
                    <ul className="list-unstyled">
                        <li><Link to="">Facebook</Link></li>
                        <li><Link to="">Twitter</Link></li>
                        <li><Link to="">Instagram</Link></li>
                    </ul>
                    </div>

                    <div className = "col-md-3 ">
                    <h6> CONNECT WITH ME </h6>
                    <p><i class='fas fa-envelope fa-spin fa-lg'></i> pritamgayen98@gmail.com</p> 
                    <p> <i class='fas fa-phone fa-spin fa-lg'></i> +91 7363943167</p>
                    </div>

                    <div className = "col-lg-2 pb-2">
                    <h6><i class='fas fa-address-card fa-spin fa-lg'></i> Address:</h6>
                    <p> Mathurapur, South 24 Parganas, 
                        West Bengal, India, Pin:743354
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