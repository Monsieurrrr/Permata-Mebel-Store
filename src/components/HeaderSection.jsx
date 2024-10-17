import React from 'react'
import Sofa from './icon/Sofa.png'


export default function HeaderSection() {
  return (
    <div className='section'>
      <div className='desktop'>
    <div className='text-kiri'>
        <h1 className='head-text'>Mebel Harga Grosir Kualitas Premium.</h1>
        <p className='head-p'>Kami hadir untuk mengkamodasikan mebel berkualitas ke setiap rumah se-Indonesia dengan harga terjangkau bagi setiap kalangan
        </p>
        
        <div className='sub-text'> 
          <div className='container-sub-text'>  
            <div><h1>Shipping</h1><p>Indonesia</p></div>
            <div><h1>Courrier</h1><p>JNE, JNT, Sicepat</p></div>
            <div><h1>Estimate</h1><p>1 - 7 days</p></div>
            </div> 
        </div>
    </div>

    <div className='image'>
    <img src={Sofa}></img>
    </div>
    </div>

    <div className='mobile mob-layout'>
    <div className='text-kiri'>
      <div className='mobile-text'>
        <h1 className='head-text'>Mebel Harga Grosir Kualitas Premium.</h1>
        <p className='head-p'>Kami hadir untuk mengkamodasikan mebel berkualitas ke setiap rumah se-Indonesia dengan harga terjangkau bagi setiap kalangan
        </p>
      </div>

        <div className='image'>
    <img src={Sofa}></img>
    </div>
        
        
    </div>

    <div className='sub-text'> 
          <div className='container-sub-text'>  
            <div><h1>Shipping</h1><p>Indonesia</p></div>
            <div><h1>Courrier</h1><p>JNE, JNT, Sicepat</p></div>
            <div><h1>Estimate</h1><p>1 - 7 days</p></div>
            </div> 
        </div>

    
    </div>

    
</div>
  )
}
