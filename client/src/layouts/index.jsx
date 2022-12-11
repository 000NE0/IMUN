import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import PureCounter from '@srexi/purecounterjs';

function Layout({ children }) {
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    new PureCounter();

    setInterval(() => {
      setLoader(false);
    }, 800);

    Aos.init({
      delay: 650,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Navbar />
      {children}

      <Footer />
      <a
        href='#'
        className='scroll-top  d-flex align-items-center justify-content-center'
      >
        <i className='bi bi-arrow-up-short'></i>
      </a>

      {Loader && <div id='preloader'></div>}
    </>
  );
}

export default Layout;
