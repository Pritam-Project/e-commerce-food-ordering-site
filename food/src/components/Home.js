import React from 'react'
import NavigationBar from './NavigationBar';
import Search from './Search.js';
import Slide from './Slide.js';
import Card from './Cart.js';
import Footer from './footer';
function Home() {
  return (
    <div>
      <NavigationBar />
      <Search />
      <Slide />
      <br/><br/>
      <Card />
      <Footer />
    </div>
  )
}

export default Home
