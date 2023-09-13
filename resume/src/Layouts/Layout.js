import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import './style/layout.css'
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <div>{children}</div>
      <Contact />
      <Footer />
    </>
  )
}