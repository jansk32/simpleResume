import React from 'react';
import Logo from '../assets/logos/23.png'

export default function Footer() {
    return (
      <div 
      className='bg-black text-white w-full flex flex-row justify-between'>
          <div></div>
          <p className='mt-8 ml-44'>© 2023 Jansen, All Rights Reserved</p>
          <img className="h-40 mr-16" src={Logo} />
      </div>
    )
  }