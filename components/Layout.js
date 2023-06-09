import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { animation } from '../utils';
import { ToastContainer } from 'react-toastify';

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div id="home">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.pageTitle}</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="page-wrapper">{props.children}</div>

      {scrollTop === true ? (
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </div>
  );
};

export default Layout;
