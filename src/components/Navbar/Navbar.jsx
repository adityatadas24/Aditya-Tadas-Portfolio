import React, { useEffect, useState } from "react";
import { Nav } from 'react-bootstrap'
import TemporaryDrawer from "./Drawers";
const Navbar = () => {

  const [scrolled, setScrolled ] = useState(false)
  

  useEffect(()=>{
    function handleScroll (){
      const offset  = window.scrollY;
      setScrolled(offset > 50)
    }
    window.addEventListener("scroll" , handleScroll)
  },[])
  return (
    <div className=" nav-bar text-light" >
      <Nav className={`navbars ${scrolled ? "scroll" : 'transparent'} `} >
        <h1><a style={{textDecoration:'none',color:'white'}} href="#about">AT.</a></h1>
        <div className="a-name fs-4 ">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div  className="mobile-drawer">
        <TemporaryDrawer />
      </div>
      </Nav>
     
    </div>
  );
};

export default Navbar;
