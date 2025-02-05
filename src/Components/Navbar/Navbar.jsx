import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import theme_pattern from '../../assets/theme_pattern.svg'


const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right="0px"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <h1>Sabare vijay</h1>
        <img className='logo' src={theme_pattern} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link"  href="#home" ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={100} href="#about"><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={100} href="#services"><p onClick={()=>setMenu("services")}>Skills</p></AnchorLink>{menu==="services"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={100} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} />:<></>}</li>
            <li><AnchorLink className="anchor-link" offset={100} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} />:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}></p>Connect with me </AnchorLink></div>
      
    </div>
  )
}

export default Navbar
