import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Logo from './icon/Permata Mebel logo.png'
import "../styles/Navbar.css"
import tokopedia from '../assets/Icon/tokopedia.png'
import shopee from '../assets/Icon/shopee.png'

const Navbar=() => {
  const [scroll,setScroll]= useState(false);

  function setScrolled(){
    if (window.scrollY >=100){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  window.addEventListener("scroll", setScrolled)





  return (
    <div className={scroll ? 'navbar scrolled' : 'navbar'}>
        <div className='logo'>
            <img src={Logo} alt="505"></img>
        </div>

        <div className='right-nav'>
            <div className='text'>
               
                <a href="https://www.tokopedia.com/permata-mebel-store"><img src={tokopedia} alt="" className='tokopedia'/></a>
                <a href="https://id.shp.ee/cZeJPCA"><img src={shopee} alt="" className='shopee'/></a>
              
             </div> 

        </div>
    </div>
  )
}

export default Navbar;

