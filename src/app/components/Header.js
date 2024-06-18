"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Head>
        <title>Next.js Bootstrap</title>
      </Head>
    <header className="css-er44ln">
      <div className="container">
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light-two">
        <Link href="/" className="navbar-brand">Next.js</Link>


        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link href="/cards" className="nav-link">Cards</Link>
            </li>
            <li className="nav-item">
              <Link href="/datatable" className="nav-link">DataTable</Link>
            </li>
            {/* <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <div
                className="nav-link dropdown-toggle"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
              >
                Components
              </div>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link href="/pages/table" className="dropdown-item">Accordion</Link>
                <Link href="/dropdown-item-2" className="dropdown-item">Alerts</Link>
                <Link href="/dropdown-item-2" className="dropdown-item">Badges</Link>
                <Link href="/dropdown-item-2" className="dropdown-item">Buttons</Link>
                <Link href="/dropdown-item-2" className="dropdown-item">Cards</Link>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>

      </div>
    </header>

     
    </>
  );
};

export default Header;
