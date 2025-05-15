import React from "react";
import "./Footer.css";
import food from "../assets/images/restaurant.jpg"
const Footer = (props) => {
  return (
    <footer className="footer-container" {...props}>
      <div className="footer-content">
        <img src={food} alt="Restaurant Food" className="footer-image" />
        <div className="footer-column">
          <h4>
            Little
            <br />
            Lemon
          </h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago, <br />
                Illinois 60602 <br />
                USA
              </address>
            </li>
            <li><a href="tel:+551199999999" target="_blank" rel="external">+55 11 9999-9999</a></li>
            <li><a href="mailto:contact@littlelemon.com" target="_blank" rel="external">contact@littlelemon.com</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.facebook.com/littlelemon"  target="_blank" rel="external">Facebook</a></li>
            <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="external">Instagram</a></li>
            <li><a href="https://twitter.com/littlelemon" target="_blank" rel="external">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
