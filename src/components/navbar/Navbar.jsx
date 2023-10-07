// import React from 'react'
// import './Navbar.css'
import { NavLink } from 'react-router-dom';


// const Navbar = () => {
//   return (
//     <React.Fragment>
//       <div id="navbar">
//         <nav>
//           <ul>
//           <li>
//               <NavLink to="/">প্রথম পাতা</NavLink>
//             </li>
//             <li>
//               <NavLink to="/notice">Notice</NavLink>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Navbar

// Navbar.js

// Navbar.js

import React, { useState } from 'react';
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
          <ul>
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
              <NavLink to="/notice">নোটিশ</NavLink>
            </li>
            <li>
              <NavLink to="/result">রেজাল্ট</NavLink>
            </li>
            <li>
              <NavLink to="/admission">ভর্তি</NavLink>
            </li>
            <li>
              <NavLink to="/routine">রুটিন</NavLink>
            </li>
            <li>
              <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
            <li>
              <NavLink to="/notification"><IoMdNotificationsOutline /></NavLink>
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
          <ul>
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
              <NavLink to="/notice">নোটিশ</NavLink>
            </li>
            <li>
              <NavLink to="/result">রেজাল্ট</NavLink>
            </li>
            <li>
              <NavLink to="/admission">ভর্তি</NavLink>
            </li>
            <li>
              <NavLink to="/routine">রুটিন</NavLink>
            </li>
            <li>
              <NavLink to="/contact">যোগাযোগ</NavLink>
            </li>
            <li>
              <NavLink to="/notification"><IoMdNotificationsOutline /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
