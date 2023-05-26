import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import LogoSVG from "../../images/logo.svg";
import "./Header.scss";


const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current?.classList[window.scrollY > 100 ? 'add' : 'remove']('active');
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <header className="header" ref={headerRef} data-header>
      <div className={`container ${show ? 'active' : ''}`}>
        <a href="/" className="logo">
          <img src={LogoSVG} alt="logo" width={187} height={38} />
        </a>

        <nav className={`navbar ${show ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img src={LogoSVG} alt="logo" width={187} height={38} />
            </a>

            <button
              className="nav-toggle-btn"
              aria-label="close menu"
              data-nav-toggler
              onClick={() => setShow(false)}
            >
              <MdClose />
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link active">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Service
              </a>
            </li>
            
           
           
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Pricing
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="header-action">
            <a href="/" className="login-btn">
              Login
            </a>
            <a href="/" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="open menu"
          data-nav-toggler
          onClick={() => setShow(true)}
        >
          <MdMenu />
        </button>
        <div className={`overlay ${show ? 'active' : ''}`} data-overlay data-nav-toggler></div>
      </div>
    </header>
  );
};

export default Header;
