import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 FlashBox. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="https://landing.flashbox-cargo.com/privacy">Privacy Policy</a></li>
          <li><a href="https://landing.flashbox-cargo.com/terms">Terms of Service</a></li>
          <li><a href="https://landing.flashbox-cargo.com/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
