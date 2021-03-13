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
            <span style={{ fontSize: 25 }}><i> EFOOD.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">ADMIN HOME<i className='fas fa-house-user fa-lg'></i> </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin_display_all_prod" className="nav-link"><i class='fas fa-chalkboard fa-lg'></i> DISPLAY ALL FOOD</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminviewdetails" className="nav-link"><i class='fas fa-user fa-lg'></i> ALL RESTAURANT</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminviewcustomer" className="nav-link"><i class='fas fa-user-circle fa-lg'></i> ALL CUSTOMER</Link>
              </li>
              <li className="nav-item">
                <Link to="/adminAddPoster" className="nav-link" ><i className='fas fa-highlighter fa-lg'></i> ADD fOOD</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin_orderList" className="nav-link" ><i class='fas fa-layer-group fa-lg'></i> ORDED ITEMS </Link>
              </li>
              <li className="nav-item">
                <Link to="/display_special" className="nav-link"><i className='fas fa-gift fa-lg'></i> SPECIAL MENU'S ORDER</Link>
              </li>
              <li className="nav-item">
                <Link to="/restautentlogout" className="nav-link"><i className='fas fa-power-off fa-lg'></i> LOGOUT </Link>
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
            <span style={{ fontSize: 25 }}><i> EFOOD.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"><em> CUSTOMER HOME </em><i className='fas fa-house-user fa-lg'></i></Link>
              </li>
              <li className="nav-item">
                <Link to="/userprofile" className="nav-link"><i class='fas fa-user fa-lg'></i> VIEW PROFILE<i className='fas fa-house-user fa-lg'></i></Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" > <i className='fas fa-shopping-cart fa-lg'></i> <em>CART</em> </Link>
              </li>
              <li className="nav-item">
                <Link to="/wishlist" className="nav-link" ><i className='fas fa-shopping-bag fa-lg'></i> <em>WISHLIST</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/paynow" className="nav-link"><i className='fas fa-credit-card fa-lg'></i> <em>PAY NOW</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/request_special" className="nav-link" ><i className='fas fa-gift fa-lg'></i> <em>ORDER SPECIAL MENU</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/displayall" className="nav-link"><i className='fas fa-comment fa-lg'></i> <em>BLOG</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"><i className='fas fa-dove fa-lg'></i> <em>ABOUT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"><i className='fas fa-phone-alt fa-lg'></i> <em>CONTACT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/restautentlogout" className="nav-link"><i className='fas fa-power-off fa-lg'></i> <em>LOGOUT</em> </Link>
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
            <span style={{ fontSize: 25 }}><i> EFOOD.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"><i className='fas fa-house-user fa-lg'></i> <em>RESTAURANT HOME</em> </Link>
              </li>
              <li className="nav-item">
                <Link to="/restprofile" className="nav-link"><i class='fas fa-user fa-lg'></i> VIEW YOU DETAILS </Link>
              </li>
              <li className="nav-item">
                <Link to="/restaddprod" className="nav-link"><i className='fas fa-highlighter fa-lg'></i> <em>ADD fOOD</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/restdisplayall" className="nav-link"><i class='fas fa-chalkboard fa-lg'></i> <em>VIEW OWN fOODS</em></Link>
              </li>
            
              
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"><i className='fas fa-dove fa-lg'></i> <em>ABOUT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"><i className='fas fa-phone-alt fa-lg'></i> <em>CONTACT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/restautentlogout" className="nav-link"><i className='fas fa-power-off fa-lg'></i> <em>LOGOUT</em> </Link>
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
            <span style={{ fontSize: 25 }}><i> EFOOD.COM</i></span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link"><i className='fas fa-house-user fa-lg'></i><em>HOME</em></Link>
              </li>
              
              <li className="nav-item">
                <Link to="/restaurantreg" className="nav-link"><i className='fas fa-store fa-lg'></i> <em>RESTARUANT REG</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/restaurantlogin" className="nav-link" ><i className='fas fa-user fa-lg'></i> <em>RESTARUANT LOGIN</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/request_special" className="nav-link" ><i className='fas fa-gift fa-lg'></i><em> ORDER SPECIAL MENU</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/displayall" className="nav-link"><i className='fas fa-comment fa-lg'></i> <em>BLOG</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link"><i className='fas fa-dove fa-lg'></i> <em>ABOUT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link"><i className='fas fa-phone-alt fa-lg'></i> <em>CONTACT US</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/adminlogin" className="nav-link" ><i className='fas fa-user fa-lg'></i> <em>ADMIN</em></Link>
              </li>
             
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link" id="signin"><i className="fas fa-sign-in-alt fa-lg"></i><em> SIGN IN</em></Link>
              </li>
              <li className="nav-item">
                <Link to="/reg" className="nav-link" id="signup"><i className="fas fa-user-plus fa-lg"></i><em> SIGN UP</em></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >

    )
  }
}

export default NavigationBar
