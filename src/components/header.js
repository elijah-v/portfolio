import { Link } from "gatsby"
import React, { useState } from "react"
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

import './Header.css'

const Header = ({ siteTitle}) => {
  const [open, setOpen] = useState(false);

  const MobileMenu = ()=>{
      setOpen(!open);
  }

  return (
  <>
  <nav className="sidebar__container">
  <Sidebar open={open}  MobileMenu={MobileMenu}/>
  <FaBars className='faBars' onClick={MobileMenu}/>
    <ul className="navOptions">
    <li><Link className="navLinks" activeClassName="on-site" to='#project-page-1'>Home</Link></li>
    <li><Link className="navLinks" activeClassName="on-site" to='#about'>About</Link></li>
    <li><Link className="navLinks" activeClassName="on-site" to='#resume'>Resume</Link></li>
    <li><Link className="navLinks" activeClassName="on-site" to='#contact'>Contact</Link></li>
    </ul>
    </nav>
  </>
  )
}


export default Header
