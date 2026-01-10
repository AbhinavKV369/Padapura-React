import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
    </>
  );
}

export default MainLayout