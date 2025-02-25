import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos"
import 'aos/dist/aos.css';
import Hero from "../../components/Hero/Hero"
import Products from "../../components/Products/Products"
import BestProduct from "../../components/BestProduct/BestProduct"
import Bannner from "../../components/Banner/Bannner"
import Subscribe from "../../components/Subscribe/Subscribe"
import Tesomonials from "../../components/Testomonials/Tesomonials"
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

const Home = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
      setOrderPopup(!orderPopup)
  }
 
  useEffect(() => {
    Aos.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
    })
    Aos.refresh()  
},[])
  return (
       <div className='dark:bg-slate-900 dark:text-white  duration-300'>
        {/* <Navbar /> */}
       <Hero />
        <Products />
       <BestProduct />
       <Bannner />
       <Subscribe />
       <Tesomonials />
       {/* <Footer /> */}
      </div>
    
  )
}

export default Home