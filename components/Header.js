import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { FormattedMessage, useIntl } from "react-intl";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useSession, signOut} from "next-auth/react"
import Link from "next/link";

const HeaderHome = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [sticky, setSticky] = useState(false);
  const [isShowDrawer, setIsShowDrawer] = useState();
  const { data: session } = useSession();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <div className="py-2 sm:py-5 container-fluid">
        <div className="site-header-one__logo flex items-center">
          <a href="/">
            {
              props.thime === 'white' ? 
              <img src="/assets/images/Autu-Securities@2x.png" width="258" alt="" />
              : <img src="/assets/images/logo@2x.png" width="258" alt="" />
            }
          </a>
          <div className="ml-2 block laptop:hidden">
            <IconButton onClick={toggleDrawer}>
              <MenuIcon fontSize="large" sx={{ color: '#FFD936' }} />
            </IconButton>
          </div>
        </div>
        <div className="main-nav__right">
          <div className="main-nav__main-navigation">
            <NavLinks />
          </div>
          {
            !session ? (
              <>
                <Link href="/register" className={`thm-btn ${props.btnClass} active`}>
                  <span><FormattedMessage id="head.menu.newAccount" /></span>
                </Link>
                <Link href="/login" className={`thm-btn ${props.btnClass}`}>
                  <span><FormattedMessage id="head.menu.signIn" /></span>
                </Link>
              </>
            ) : (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
                <Typography variant="button" onClick={handleClick}>
                  Heading
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={signOut}>Logout</MenuItem>
                </Menu>
              </Stack>
            )
          }
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
