  import React, { useState, useRef, useEffect } from "react";
  import { MdClose, MdMenu } from "react-icons/md";
  import { Link } from "react-scroll";
  import LogoSVG from "../../images/apexadventures.jpg";

  import "./Header.scss";

  const Header = () => {
    const [show, setShow] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        headerRef.current?.classList[window.scrollY > 100 ? "add" : "remove"](
          "active"
        );
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <header className="header" ref={headerRef} data-header>
        <div className={`container ${show ? "active" : ""}`}>
          <Link to="hero" smooth={true} offset={-70} duration={500} className="logo">
          <img src={LogoSVG} alt="logo" width={120} height={24} />
          </Link>

          <nav className={`navbar ${show ? "active" : ""}`} data-navbar>
            <div className="navbar-top">
              <Link to="hero" smooth={true} offset={-70} duration={500} className="logo">
                <img src={LogoSVG} alt="logo" width={187} height={38} />
              </Link>

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
                <Link to="hero" smooth={false} offset={-70} duration={500} className="navbar-link ">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="destination" smooth={false} offset={-70} duration={500} className="navbar-link">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="service" smooth={false} offset={-70} duration={500} className="navbar-link">
                  Service
                </Link>
              
              </li>
              {/* ... */}
              <li className="navbar-item">
                <Link to="gallery" smooth={false} offset={-70} duration={500} className="navbar-link">
                  Gallery
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="Form" smooth={false} offset={-70} duration={500} className="navbar-link">
                  Contact
                </Link>
              </li>
              
            </ul>

            <div className="header-action">
              
              {/* <a href="/" className="btn btn-primary">
                The Info Table 
              </a> */}
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
          <div
            className={`overlay ${show ? "active" : ""}`}
            data-overlay
            data-nav-toggler
          ></div>
        </div>
      </header>
    );
  };

  export default Header;
