import React from 'react'
import { CiDiscount1 } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function BenefitSection() {
  return (
    <div className='sec-2'>
    <div className='benefit'>
      <h1 className='head-benefit'>BENEFIT</h1>
      <div className='line'></div>

      <div className='benefit-text'>
          <div className='card-benefit'>
              <h1 className='con1'><CiDiscount1 /></h1>
              <h2>Banyak Promo</h2>
              <p></p>
          </div>

          <div className='card-benefit'>
              <h1 className='con2'><FaTruck /></h1>
              <h2>Pengiriman Kilat</h2>
              <p></p>
          </div>
          
          <div className='card-benefit'>
              <h1 className='con3'><RiCustomerService2Fill /></h1>
              <h2>Toko Terjamin</h2>
              <p></p>
          </div>
      </div>

    </div>
    </div>
  )
}
