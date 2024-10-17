import React from 'react'
import "../styles/Footer.css"
import logo from "./icon/Permata Mebel logo.png"
 

export default function Footer(){
  return (
    <div>
        <footer>
            <div className='footer-1'>
            <div className='footer-container'>
                <div className='footer-text ftxt-1'>
                    <h1 className='warna-1'>BELANJA</h1>
                    <div>
                    <a href="https://www.tokopedia.com/permata-mebel-store"><p>Tokopedia</p></a>
                    <a href="https://id.shp.ee/cZeJPCA"><p>Shopee</p></a>
                    </div>
                </div>

                <div className='footer-text ftxt-2'>
                    <h1 className='warna-2'>LOKASI</h1>
                    <p>Jakarta Barat</p>
                    <p>Online : Setiap hari 09:00 - 15:00 WIB</p>
                    <div>
                        
                        
                    </div>
                </div>

            </div>

            <div className='contact-us'>
               <h1 className='warna-3'>CONTACT US</h1>
               <p><span>Whatsapp :</span>&nbsp; +(62)812-9176-8138</p>
               <p> <span>Email :</span>&nbsp; permatamebelstore@gmail.com</p>

            </div>

            </div>

            <div className='footer-2'>
                <div className='footer-line'></div>
              
                <div className='footer-end'>
                <p>copyright © 2024 all right reserved</p>
                <img src={logo} alt="" />
                </div>
            </div>



        </footer>
    </div>
  )
}