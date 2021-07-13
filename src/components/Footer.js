import React from "react";
import "./styles/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import img from "./Images/Logo-Angel-Sam.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">Check my website</p>
        <p className="footer-subscription-text">Contact Me</p> */}
        <div className="input-areas">
          {/* <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Contact</Button>
          </form> */}
        </div>
      </section>
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Abut Me</h2>
            <Link to="/resume">Resume</Link>
            <div className="footer-link-items">
              <h2>Check my work</h2>

              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link className="social-logo">{img}</Link>
          </div> */}
          <p className="website-rights">
            My Website Angel Samano Hamud 2021
          </p>
          {/* <div className="social-icons">
            <Link
              className="social-icon-link behance"
              to="/"
              target="_blank"
              aria-label="Behance"
            >
              <i class="fab fa-behance"></i>
            </Link>
            <Link
              className="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i class="fab fa-linkedin-in"></i>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
