import React from 'react'
import Navigation from './NavigationBar'
import Footer from './footer'


function aboutus() {
    return (

      <div>
        <Navigation/>
            <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body m-5">
      
      <h3>Who we are</h3>
            <p    className="text-info">Own Cuisine is a technology company that connects people with the best in their cities. We do this by empowering local businesses and in turn, generate new ways for people to earn, work and live. We started by facilitating door-to-door delivery, but we see this as just the beginning of connecting people with possibility — easier evenings, happier days, bigger savings accounts, wider nets and stronger communities.</p>
      
      
      
      
      
      
          <div className="card text-dark bg-info mb-3" >
          <div className="card-body">
          <p  className="text-info">text here.</p>
          <h1 className="text-white">ABOUT US</h1>
          <p  className="text-info">text here.</p>
        </div>
      </div>
      
      
      </div></div></div></div>
      <Footer/>
      </div>
          );
      }
     
  

export default aboutus;