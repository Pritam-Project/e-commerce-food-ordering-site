import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'



function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  if (authuser === 'ADMIN') {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mynav">
        <div className="container-fluid">
          <Link className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/icon.jpg'} alt="Logo" />
            <span style={{ fontSize: 25 }}><i> KITCHEN.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"> ADMIN HOME </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin_display_all_prod" className="nav-link"> DISPLAY ALL FOOD</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminAddPoster" className="nav-link" > ADD fOOD </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin_orderList" className="nav-link" > ORDED ITEMS </Link>
              </li>
              <li className="nav-item">
                <Link to="/display_retro" className="nav-link"> SPECIAL MENU</Link>
              </li>
              <li className="nav-item">
                <Link to="/designerlogout" className="nav-link"> LOGOUT </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    )

  }
  else if (authuser === 'USER') {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mynav">
        <div className="container-fluid">
        <Link className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/icon.jpg'} alt="Logo" />
            <span style={{ fontSize: 25 }}><i> KITCHEN.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"> CUSTOMER HOME </Link>
              </li>
              
              
              <li className="nav-item">
                <Link to="/#" className="nav-link"> PROMO </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" > CART </Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlist" className="nav-link" > WISHLIST </Link>
              </li>
              <li className="nav-item">
                <Link to="/displayall" className="nav-link"> BLOG</Link>
              </li>
              <li className="nav-item">
                <Link to="/request_retro" className="nav-link" > SPECIAL MENU </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"> ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"> CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/designerlogout" className="nav-link"> LOGOUT </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >

    )
  }
  else if (authuser === 'RESTAURANT') {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mynav">
        <div className="container-fluid">
        <Link className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/icon.jpg'} alt="Logo" />
            <span style={{ fontSize: 25 }}><i> KITCHEN.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"> RESTEURANT HOME </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/degaddprod" className="nav-link"> ADD fOOD</Link>
              </li>
              <li className="nav-item">
                <Link to="/degdisplayall" className="nav-link"> VIEW OWN fOODS</Link>
              </li>
            
              
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"> ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"> CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/designerlogout" className="nav-link"> LOGOUT </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    )
  }
  else {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mynav">
        <div className="container-fluid">
        <Link className="navbar-brand" ><img src={process.env.PUBLIC_URL + '/icon.jpg'} alt="Logo" />
            <span style={{ fontSize: 25 }}><i> KITCHEN.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"> HOME </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/designerreg" className="nav-link"> RESTERUANT REG </Link>
              </li>
              <li className="nav-item">
                <Link to="/designerlogin" className="nav-link" > RESTERUANT LOGIN </Link>
              </li>
              <li className="nav-item">
                <Link to="/request_retro" className="nav-link" > SPECIAL FOOD </Link>
              </li>
              <li className="nav-item">
                <Link to="/#" className="nav-link"> PROMO </Link>
              </li>
              <li className="nav-item">
                <Link to="/displayall" className="nav-link"> BLOG</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"> ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"> CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminlogin" className="nav-link" > ADMIN LOGIN </Link>
              </li>
             
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link" id="signin"><i className="fas fa-sign-in-alt"></i> Sign in</Link>
              </li>
              <li className="nav-item">
                <Link to="/reg" className="nav-link" id="signup">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >

    )
  }
}

export default NavigationBar
