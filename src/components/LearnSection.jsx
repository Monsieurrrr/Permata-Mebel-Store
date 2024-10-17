import React from 'react'
import chair from "../assets/learnChair.png"
import { Link } from 'react-router-dom';

export default function learnSection() {
  return (
    <div className='learn-wrap'>
        <div>
            <img src={chair} alt="" />
        </div>

        <div className='learn-text'>
            <h1>Tentang Toko Kami</h1>
            <p>Selamat datang di Permata Mebel Store, pusat mebel terpercaya yang siap memenuhi kebutuhan interior rumah Anda dengan sentuhan elegan dan kualitas terbaik. Kami menyediakan berbagai pilihan furnitur berkualitas tinggi, mulai dari Kasur, meja, kursi, lemari, sofa, hingga perlengkapan dekorasi lainnya. Setiap produk kami terjamin kualitas dan material terbaik dan didukung dengan pengiriman kilat, serta transaksi aman. </p>
        </div>
    </div>
  )
}
