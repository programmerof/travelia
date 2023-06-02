import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import LogoSVG from "../../images/apexadventures.jpg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={LogoSVG} alt="logo" width="187" height="38" />
            </a>

            <p className="footer-text">
              We always make our customer happy by providing as many choices as
              possible
            </p>

            <ul className="social-list">
              <li>
                <a href="/" className="social-link">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <BsTwitter />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">About</p>
            </li>
            <li>
              <a href="/" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                News
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Menu
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="/" className="footer-link">
                Why Company
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Blog
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="/" className="footer-link">
                Account
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Support Center
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Feedback
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="footer-link">
                Accessibility
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Get in Touch</p>
            <p className="footer-text">
              Question or feedback? We’d love to hear from you.
            </p>

            <form action="" className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                required
                className="input-field"
              />

              <button
                type="submit"
                className="input-btn"
                aria-label="send a message"
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright {new Date().getFullYear()}. Made by{" "}
            <a href="Bhairabitsolution.com" className="copyright-link">
              Bhairabitsolution.com
              
            </a>
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="/" className="footer-bottom-link">
                Terms and Condation
              </a>
            </li>
            <li>
              <a href="/" className="footer-bottom-link">
                Privacy and Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
