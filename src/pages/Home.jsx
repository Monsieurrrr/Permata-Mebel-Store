import React from 'react'
import "../styles/Home.css"
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import BenefitSection from '../components/BenefitSection'
import BannerSection from '../components/BannerSection'
import LearnSection from '../components/LearnSection'
import CardHome from '../components/CardHome'
import { Link } from 'react-router-dom';

import kasurSymbol from '../assets/Kasur 2 in 1 Symbol.png'
import lemariKuda from '../assets/iCAB - 204 LV. KUDA.png'
import kasurBig from '../assets/Kasur BigFoam2.png'
import lemariWood from '../assets/iCAB Mid 4512 C Teak Wood.png'
import lemariPtron from '../assets/iCAB Mid 4512 C Ptron.png'
import bomber3 from '../assets/Kasur Bomber Eurotop 3.png'
import bomber4 from '../assets/Kasur Bomber Eurotop 4.png'
import bomber from '../assets/Kasur Bomber Eurotop.png'
import kasurLabel from '../assets/Kasur label.png'
import kasurVito from '../assets/Kasur Vito.png'

// import logoInoac from '../assets/logo inoac.png'
// import logoBigfoam from '../assets/logo bigFoam.png'
// import Partnership from '../components/Partnership'
import '../styles/HomeResponsive.css'
import Footer from '../components/Footer'



export default function Home() {

  const data = [
    {
      id: 1,
      image: kasurBig,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-busa-lipat-4-tebal-10cm-by-bigfoam-beragam-ukuran-90x180-8c6bc?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 2,
      image: kasurSymbol,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-2-in-1-full-set-by-symbol-beragam-ukuran-bonus-bantal-100x200-d6293?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 3,
      image: lemariKuda,
      link: "https://www.tokopedia.com/permata-mebel-store/lemari-pakaian-plastik-4-pintu-2-tower-napolly-icab-204-lv-kuda?extParam=whid%3D11927672%26src%3Dshop"
  },{
      id: 4,
      image: lemariWood,
      link: "https://www.tokopedia.com/permata-mebel-store/lemari-pakaian-cermin-serbaguna-12-pintu-4-tower-napolly-icab-mid-4512-c-teak-wood?extParam=src%3Dshop%26whid%3D11927672"

  },{
      id: 5,
      image: lemariPtron,
      link: "https://www.tokopedia.com/permata-mebel-store/lemari-pakaian-cermin-serbaguna-12-pintu-4-tower-napolly-icab-mid-4512-c-ptron?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 6,
      image: kasurVito,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-vito-by-bigland-tebal-28cm-beragam-ukuran-warna-bonus-bantal-160x200-f82c4?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 7,
      image: kasurLabel,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-murah-kokoh-by-label-tebal-28cm-beragam-ukuran-bonus-bantal-160x200-d0a7e?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 8,
      image: bomber,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-bomber-eurotop-by-bigland-tebal-28cm-beragam-ukuran-warna-bonus-bantal-120x200-6fffc?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 9,
      image: bomber3,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-bomber-eurotop-by-bigland-tebal-28cm-beragam-ukuran-warna-bonus-bantal-120x200-6fffc?extParam=src%3Dshop%26whid%3D11927672"
  },{
      id: 10,
      image: bomber4,
      link: "https://www.tokopedia.com/permata-mebel-store/kasur-spring-bed-bomber-eurotop-by-bigland-tebal-28cm-beragam-ukuran-warna-bonus-bantal-120x200-6fffc?extParam=src%3Dshop%26whid%3D11927672"
  }

]

// const dataPartner = [
//   {
//     id: 1,
//     image: logoInoac,
// },{
//     id: 2,
//     image: logoBigfoam,

// }
// ]

  return (
    <div className='home'>
    <Navbar/>
    <HeaderSection/>
    <BenefitSection/>
    <BannerSection/>

    <div className='best-header'>
    <h1>PRODUK TERBAIK TAHUN INI</h1>
    <div className='line-3'></div>
    </div>

    <div className='bestSell-wrap'>
    {
      data.map((data)=>{
        return <CardHome key={data.id} 
                        image={data.image} 
                        link = {data.link}
                        />
      })
    }
    </div>
    <div className='btn-wrapper-lihat'>
    <Link to="https://www.tokopedia.com/permata-mebel-store/product" className='btn-lihat' >Lihat semua </Link>
    </div>
    <LearnSection/>

    <Footer/>
    
    

{/* <div className='partnership-wrap'>
    {
      dataPartner.map((dataPartner)=>{
        return <Partnership key={dataPartner.id} 
                        image={dataPartner.image} 
                        />
      })
    }
    </div> */}

    </div>
  )
}
