import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { FormattedMessage, useIntl } from "react-intl";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);
  const [isShowDrawer, setIsShowDrawer] = useState();

  const toggleDrawer = () => setIsShowDrawer(!isShowDrawer);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header-one stricky bg-black ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="container-fluid">
        <div className="site-header-one__logo flex items-center">
          <a href="/">
            <img src="/assets/images/logo@2x.png" width="258" alt="" />
          </a>
          <div className="ml-2 block laptop:hidden">
            <IconButton onClick={toggleDrawer}>
              <Menu fontSize="large" sx={{ color: '#FFD936' }} />
            </IconButton>
          </div>
        </div>
        <div className="main-nav__right">
          <div className="main-nav__main-navigation">
            <NavLinks />
          </div>
          <a href="#" className={`thm-btn ${props.btnClass} active`}>
            <span><FormattedMessage id="head.menu.newAccount" /></span>
          </a>
          <a href="#" className={`thm-btn ${props.btnClass}`}>
            <span><FormattedMessage id="head.menu.signIn" /></span>
          </a>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={isShowDrawer}
        onClose={toggleDrawer}
      >
        <SideMenu toggleDrawer={toggleDrawer} />
      </Drawer>
    </header>
  );
};

export default HeaderHome;
