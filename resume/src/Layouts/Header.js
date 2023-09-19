import React from 'react';

export default function Header() {
  return (
    <div className="header">
        <div className="logo"><a href='/'>J</a></div>
        <div></div>
        <div className="menu">
          <a className="menu-button" href='/about'>About Me</a>
          <a className="menu-button" href='/projects'>Projects</a>
          <a className="menu-button" href='/photography'>Photography</a>
          <p></p>
        </div>
    </div>
  )
}