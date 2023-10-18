
import { Link, useLocation } from 'react-router-dom';


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiDownArrow } from 'react-icons/bi'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeSidebar = () => {
    setMenuVisible(false);
    setDropdownVisible(false);

  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleIconClick = (linkName) => {
    setActiveLink(linkName);
  }


  const location = useLocation()


  return (

    <React.Fragment>
      <div id="navbar">
        {/* Hamburger Icon */}
        <div className={`menu-icon ${menuVisible ? 'cross' : ''}`} onClick={toggleMenu}>
          {menuVisible ? <FiX /> : <FiMenu />} {/* Use the icons */}
        </div>
        {/* Main Navigation Menu */}
        <nav className="main-menu">
          <ul className='flex justify-around items-center'>
            <li className={`relative ${location.pathname === '/' ? 'selected' : ''}`}>
              <NavLink to="/">প্রথম পাতা</NavLink>
              <span></span>
            </li>


            {/* <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}> */}
            {/* <li className={`relative ${location.pathname.startsWith('/administration') ? 'selected' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}> */}
            <li className={`relative ${location.pathname === '/administration' ? 'selected' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>

              <a href="##" >প্রশাসনিক</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide1">
                  <Link to="/administration/management-committee">পরিচালনা কমিটি</Link>
                  <Link to="/administration/president-message">প্রতিষ্ঠান সভাপতির বাণী</Link>
                  <Link to="/administration/pricipal-message">অধ্যক্ষের বাণী</Link>
                  <Link to="/administration/teachers">শিক্ষকবৃন্দ</Link>
                  <Link to="/administration/workers">কর্মকর্তা</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >একাডেমিক</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide2">
                  <Link to="/academics/class-routine">ক্লাস রুটিন</Link>
                  <Link to="/academics/exam-routine">পরীক্ষার রুটিন</Link>
                  <Link to="/academics/notice">নোটিশ</Link>
                  <Link to="/academics/syllabus">সিলেবাস</Link>
                  <Link to="/academics/calendar">একাডেমিক ক্যালেন্ডার</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >সহপাঠ</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide3">
                  <Link to="/schoolfellow/scout-guide">বয় ও গার্লস স্কাউট গাইড</Link>
                  <Link to="/schoolfellow/debate-competition">বিতর্ক প্রতিযোগিতা</Link>
                  <Link to="/schoolfellow/play">ক্রিয়া</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >ভর্তি</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide4">
                  <Link to="/admissions/admission-notice">ভর্তি বিজ্ঞপ্তি</Link>
                  <Link to="/admissions/admission-exam-syllabus">ভর্তি পরিক্ষার সিলেবাস</Link>
                  <Link to="/admissions/fill-admission-form">ভর্তির ফরম পূরণ</Link>
                  <Link to="/admissions/admit-card">এডমিট কার্ড</Link>
                  <Link to="/admissions/list-of-selected-students-seeking-admission">ভর্তি নির্বাচিত শিক্ষার্থীর তালিকা</Link>
                  <Link to="/admissions/list-of-selected-students-waiting-admission">ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >রেজাল্ট</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide5">
                  <Link to="/results/school-result">স্কুল রেজাল্ট</Link>
                  <Link to="/results/others-result">অন্যান্য</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${location.pathname === '/students' ? 'selected' : ''}`}>
              <NavLink to="/students">শিক্ষার্থী</NavLink>
              <span></span>
            </li>

            <li className={`relative ${dropdownVisible ? 'open' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a href="##" >গ্যালারি</a>
              {dropdownVisible && (
                <div className="dropdown-content dropdownWide6">
                  <Link to="/gallery/events">ইভেন্টস</Link>
                  <Link to="/gallery/album">এলবাম</Link>
                </div>
              )}
              <span></span>
            </li>

            <li className={`relative ${location.pathname === '/contact' ? 'selected' : ''}`}>
              <NavLink to="/contact">যোগাযোগ</NavLink>
              <span></span>
            </li>
            <li className={`relative ${location.pathname === '/login' ? 'selected' : ''}`}>
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

          <ul>
            <li onClick={closeSidebar}>
              <NavLink className='sidebar-nav' to="/">প্রথম পাতা</NavLink>
            </li>

            <li className='relative' onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'প্রশাসনিক' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('প্রশাসনিক')} href="##">প্রশাসনিক</a>

              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide1">
                  <Link onClick={closeSidebar} to="/administration/management-committee">পরিচালনা কমিটি</Link>
                  <Link onClick={closeSidebar} to="/administration/president-message">প্রতিষ্ঠান সভাপতির বাণী</Link>
                  <Link onClick={closeSidebar} to="/administration/pricipal-message">অধ্যক্ষের বাণী</Link>
                  <Link onClick={closeSidebar} to="/administration/teachers">শিক্ষকবৃন্দ</Link>
                  <Link onClick={closeSidebar} to="/administration/workers">কর্মকর্তা</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('প্রশাসনিক')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>
            <li className='relative' onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'একাডেমিক' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('একাডেমিক')} href="##">একাডেমিক</a>
              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide2">
                  <Link onClick={closeSidebar} to="/academics/class-routine">ক্লাস রুটিন</Link>
                  <Link onClick={closeSidebar} to="/academics/exam-routine">পরীক্ষার রুটিন</Link>
                  <Link onClick={closeSidebar} to="/academics/pricipal-message">অধ্যক্ষের বাণী</Link>
                  <Link onClick={closeSidebar} to="/academics/notice">নোটিশ</Link>
                  <Link onClick={closeSidebar} to="/academics/syllabus">সিলেবাস</Link>
                  <Link onClick={closeSidebar} to="/academics/calendar">একাডেমিক ক্যালেন্ডার</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('একাডেমিক')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>
            <li className='relative' onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'সহপাঠ' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('সহপাঠ')} href="##">সহপাঠ</a>

              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide3">
                  <Link onClick={closeSidebar} to="/schoolfellow/scout-guide">বয় ও গার্লস স্কাউট গাইড</Link>
                  <Link onClick={closeSidebar} to="/schoolfellow/debate-competition">বিতর্ক প্রতিযোগিতা</Link>
                  <Link onClick={closeSidebar} to="/schoolfellow/play">ক্রিয়া</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('সহপাঠ')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>

            {/* <li className={`relative ${dropdownVisible ? 'open' : ''}`} > */}
            {/* <li className={`relative ${location.pathname.startsWith('/admissions') ? 'selected' : ''}`} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}> */}
            <li className='relative' onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'ভর্তি' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('ভর্তি')} href="##">ভর্তি</a>

              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide4">
                  <Link onClick={closeSidebar} to="/admissions/admission-notice">ভর্তি বিজ্ঞপ্তি</Link>
                  <Link onClick={closeSidebar} to="/admissions/admission-exam-syllabus">ভর্তি পরিক্ষার সিলেবাস</Link>
                  <Link onClick={closeSidebar} to="/admissions/fill-admission-form">ভর্তির ফরম পূরণ</Link>
                  <Link onClick={closeSidebar} to="/admissions/admit-card">এডমিট কার্ড</Link>
                  <Link onClick={closeSidebar} to="/admissions/list-of-selected-students-seeking-admission">ভর্তি নির্বাচিত শিক্ষার্থীর তালিকা</Link>
                  <Link to="/admissions/list-of-selected-students-waiting-admission">ভর্তি অপেক্ষমান শিক্ষার্থীর তালিকা</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('ভর্তি')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>


            <li className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'রেজাল্ট' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('রেজাল্ট')} href="##">রেজাল্ট</a>
              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide5">
                  <Link onClick={closeSidebar} to="/results/school-result">স্কুল রেজাল্ট</Link>
                  <Link onClick={closeSidebar} to="/results/others-result">অন্যান্য</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('রেজাল্ট')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>

            <li onClick={closeSidebar}>
              <NavLink className='sidebar-nav' to="/students">শিক্ষার্থী</NavLink>
            </li>

            <li className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <a className={`sidebar-nav ${activeLink === 'গ্যালারি' ? 'selected-bg' : ''}`} onClick={() => handleIconClick('গ্যালারি')} href="##">গ্যালারি</a>
              {dropdownVisible && (
                <div className="dropdown-sidebar dropdownWide6">
                  <Link to="/gallery/events">ইভেন্টস</Link>
                  <Link to="/gallery/album">এলবাম</Link>
                </div>
              )}
              <i onMouseEnter={openDropdown} onMouseLeave={closeDropdown} onClick={() => handleIconClick('গ্যালারি')} className='dropdown-sidebarIcon'><BiDownArrow /></i>
            </li>

            <li onClick={closeSidebar}>
              <NavLink className='sidebar-nav' to="/contact">যোগাযোগ</NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink className='sidebar-nav' to="/login">লগিন</NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink className='sidebar-nav pt-2' to="/notifications"><IoMdNotificationsOutline /></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;