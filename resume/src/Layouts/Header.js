import React from 'react';
import Logo from '../assets/logos/23.png'

export default function Header() {
  return (
    <div className="header bg-black text-white">
        <div className="logo">
          <a href='/'>
            <img className='h-40 my-4 ml-8' src={Logo} alt='logo' />
          </a>
        </div>
        <div></div>
        <div className="menu my-16 text-2xl">
          <a className="menu-button" href='/about'>About Me</a>
          <a className="menu-button" href='/projects'>Projects</a>
          <a className="menu-button" href='/photography'>Photography</a>
          <p></p>
        </div>
    </div>
  )
}