import React from 'react'
import Navbars from '../../common/Navigation/Navbars';
import Footer from '../../common/Footer/Footer';
import HeroVideo from './components/HeroVideo';
import CardSupport from './components/CardSupport';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';

const Home = () => {

  return (
    <div id="home" className="grid">
      <Navbars />
      <HeroVideo />
      {/* CARD  */}
      <CardSupport bgColor="bg-gradient-to-t from-custom-gray via-white to-black" 
                   spacing="p-28"  />
      {/* GALLERY */}
      {/* make a mobile component to show only one or two with a like to the page */}
      <Gallery spacing="p-28"/>
      {/* REVIEW */}
      <Reviews/>
      {/* FORM & FOOTER */}
      <Footer />

    </div >
  )
}

export default Home