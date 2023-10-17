

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

import { IoMdNotificationsOutline } from 'react-icons/io'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeSidebar = () => {
    setMenuVisible(false);
  };

  return (


    <React.Fragment>
      <div id="navbar">
        {/* Hamburger Icon */}
        <div className={`menu-icon ${menuVisible ? 'cross' : ''}`} onClick={toggleMenu}>
          {menuVisible ? <FiX /> : <FiMenu />} {/* Use the icons */}
        </div>
        {/* Main Navigation Menu */}
        <nav className="main-menu">
          <ul className='flex justify-around items-center '>
            <li className=' relative'>
              <NavLink to="/">প্রথম পাতা</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/administration">প্রশাসনিক</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/syllabus">সিলেবাস</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/students">শিক্ষার্থী</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/result">রেজাল্ট</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/routine">রুটিন</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/admission">ভর্তি</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/notice">নোটিশ</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/contact">যোগাযোগ</NavLink>
              <span></span>
            </li>
            <li className='relative'>
              <NavLink to="/login">লগিন</NavLink>
              <span></span>
            </li>
            <li>
              <NavLink className='text-xl' to="/notifications"><IoMdNotificationsOutline /></NavLink>
            </li>
          </ul>
        </nav>

        {/* Sidebar Navigation Menu */}
        <nav className={`sidebar ${menuVisible ? 'visible' : ''}`}>
          <div className="sidebar-header">
            <div className="close-icon" onClick={closeSidebar}>
              <FiX />
            </div>
          </div>
          <ul onClick={closeSidebar}>
            <li>
              <NavLink to="/">প্রথম পাতা</NavLink>
            </li>
            <li>
              <NavLink to="/administration">প্রশাসনিক</NavLink>
            </li>
            <li>
              <NavLink to="/syllabus">সিলেবাস</NavLink>
            </li>
            <li>
              <NavLink to="/students">শিক্ষার্থী</NavLink>
            </li>
            <li>
              <NavLink to="/result">রেজাল্ট</NavLink>
            </li>
            <li>
              <NavLink to="/routine">রুটিন</NavLink>
            </li>
            <li>
              <NavLink to="/admission">ভর্তি</NavLink>
            </li>
            <li>
              <NavLink to="/notice">নোটিশ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
            <li>
              <NavLink to="/login">লগিন</NavLink>
            </li>
            <li>
              <NavLink to="/notifications"><IoMdNotificationsOutline /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
