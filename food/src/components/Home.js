import React from 'react'
import NavigationBar from './NavigationBar';
import Slide from './Slide.js';
import Card from './Cart.js';
import Footer from './footer';
function Home() {
  return (
    <div>
      <NavigationBar />
      <Slide />
      <br/><br/>
      <Card />
      <Footer />
    </div>
  )
}

export default Home
