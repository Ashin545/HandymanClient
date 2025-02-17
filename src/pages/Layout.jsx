import React from 'react';

import { Outlet } from 'react-router-dom';  // `Outlet` will render the page based on route
import Header from '../components/header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>

  );
};

export default Layout;
