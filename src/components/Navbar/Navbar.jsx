import React, { useState } from 'react';
import "./Navbar.css";
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="nav-logo"><h1>Priya</h1></div>

      {/* HAMBURGER ICON (ONLY WHEN CLOSED) */}
      {!isOpen && (
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={() => setIsOpen(true)}
        />
      )}

      {/* NAV MENU */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>

        {/* CLOSE ICON */}
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={() => setIsOpen(false)}
        />

        <li onClick={() => { setMenu("home"); setIsOpen(false); }}>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => { setMenu("about"); setIsOpen(false); }}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => { setMenu("services"); setIsOpen(false); }}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Skills</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => { setMenu("work"); setIsOpen(false); }}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>Projects</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="" />}
        </li>

        <li onClick={() => { setMenu("contact"); setIsOpen(false); }}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>

      </ul>

      {/* DESKTOP CONNECT BUTTON */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

    </div>
  );
};

export default Navbar;
