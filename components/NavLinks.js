import React, { useState } from "react";
import Link from "next/link";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const route = useRouter();

  return (
    <ul className="main-nav__navigation-box">
      <li className={route.pathname === '/' ? 'active' : ''}>
        <Link prefetch href="/">
          首页
        </Link>
      </li>
      <li className={route.pathname === '/market' ? 'active' : ''}>
        <Link prefetch href="/market">
          市场
        </Link>
      </li>
      <li className={route.pathname === '/tools' ? 'active' : ''}>
        <Link prefetch href="/tools">
          交易工具
        </Link>
      </li>
      <li className={route.pathname === '/promotion' ? 'active' : ''}>
        <Link prefetch href="/promotion">
          直播/推广
        </Link>
      </li>
      <li className={route.pathname === '/news' ? 'active' : ''}>
        <Link prefetch href="/news">
          资讯中心
        </Link>
      </li>
      <li className={route.pathname === '/about' ? 'active' : ''}>
        <Link prefetch href="/about">
          关于AuTu
        </Link>
      </li>
      <li className="dropdown language">
        <Link href="#">
          <>
            中文
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          {/* <li>
            <Link href="/blog">
              English
            </Link>
          </li> */}
          <li>
            <Link href="/">
              中文
            </Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link href="/blog">
          <>
            News
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              News
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              News Details
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
