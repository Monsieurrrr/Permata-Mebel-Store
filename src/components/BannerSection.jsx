import React from 'react'
import Banner from './icon/banner.jpeg'
import chair from './icon/chair.png'
import bed from './icon/bed.png'
import table from './icon/table.png'
import wardrobe from './icon/wardrobe.png'
import {Link} from 'react-router-dom'


export default function BannerSection() {
  return (
    <div className='banner-sec'>

    <div className='container'>
      <img src={Banner}></img>
      <div className='text-container'>
          <p>Mebel Terbaru</p>
          <h2 className='line-2'></h2>
          <h1>Fullset Mebel</h1>
          <Link className='btn-check' to='https://www.tokopedia.com/permata-mebel-store'>CHECK SEKARANG</Link>
      </div>
    </div>
    
    <div className='bottom-banner'>
      <div className='container-2' >
        <div>
      <h1>SPRING BED</h1> 
      <p>16 Produk</p>  
      </div> 
      <img src={bed}></img>
      </div>

      <div className='container-3'>
       <div> 
      <h1>Lemari</h1> 
      <p>5 Produk</p>   
      </div> 
      <img src={wardrobe}></img>
      </div>

      <div className='container-4'>
        <div className='sub-contain atas'>
          <div className='text-atas'>
          <h1>Meja</h1>
          <p>2 Produk</p>    
          </div>
        
          <div className='sub-img-container'> <img src={table} className='sub-img-1'></img> </div>
        </div>

        <div className='sub-contain bawah'>
        <div className='text-bwh'>
        <h1>Kursi</h1>   
        <p>3 Produk</p>
        </div> 
        <div className='sub-img-container'> <img src={chair} className='sub-img-2'></img> </div>
        </div>

      </div>
    </div>

    
    </div>
  )
}
