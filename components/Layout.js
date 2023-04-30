import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { animation } from '../utils';

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
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/apton-icons.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/fontawesome-all.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/main.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/style.css"
          rel="stylesheet"
        />
        <link
          href="/assets/css/responsive.css"
          rel="stylesheet"
        />
      </Head>

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
