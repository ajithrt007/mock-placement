import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [heightVar, setHeightVar] = useState("unset");
  const [displayVar, setDisplayVar] = useState("none");
  const navbarStyle = {
    height: heightVar,
  };
  const menuOptions = {
    display: displayVar,
  };
  function openMenu() {
    if (heightVar === "unset") {
      setHeightVar("100vh");
      setDisplayVar("flex");
    } else {
      setHeightVar("unset");
      setDisplayVar("none");
    }
  }
  function closeMenu(){
    if(heightVar === "100vh"){
        setHeightVar("unset");
        setDisplayVar("none"); 
    }
  }
  return (
    <div
      className="fixed top-0 w-full navbar border-b-2 border-white/40 z-20"
      style={navbarStyle}
    >
      <div className="flex items-center justify-between p-10 navbarMain">
        <a href="https://ieeesctsb.org/">
          <img src="/mockplacement-yellow.svg" alt="" className="sctsb" />
        </a>
        <div className="relative w-[40px] h-[27px] menu">
        <button className='' onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} className='h-[20px]'/>
        </button>   
        </div>
      </div>
      <div
        className="flex flex-col justify-between px-[4vw] items-center cursor-pointer menuOption"
        style={menuOptions}
      >
        <Link
          className="notiFont"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          className="notiFont"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          className="notiFont"
          activeClass="active"
          to="sponsor"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          Sponsor
        </Link>
        {/* <Link
          className="notiFont"
          activeClass="active"
          to="events"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          Winners
        </Link>
        <Link
          className="notiFont"
          activeClass="active"
          to="points"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          Points
        </Link> */}
        <Link
          className="notiFont"
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}