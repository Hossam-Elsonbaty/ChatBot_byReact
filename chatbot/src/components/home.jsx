import React from 'react';
import Navbar from './navbar';
import Plans from './plans';
import Landing from './landing';
import Footer from './footer';
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Landing></Landing>
      <Plans></Plans>
      <Footer></Footer>
    </main>
  )
}
