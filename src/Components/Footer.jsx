import React from 'react';
import '../styles/footer.css'
import { FaFacebook, FaXTwitter  } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import payment from '../assets/payment1.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">

          {/* Stay Up to Date - Parent Section */}
          <div className="footer-section">
            <h3>Stay up to date</h3>
            <p>Subscribe to our newsletter and get 20% discount offer in  <br />your first order.</p>
            <div className="email-subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Submit</button>
            </div>

            {/* Move SHOP, COMPANY & ABOUT Inside Here */}
            <div className="footer-links">

              {/* SHOP */}
              <div className="footer-subsection">
                <h4>SHOP</h4>
                <ul>
                  <li className='foo'>Body Lotion</li>
                  <li className='foo'>Computer Gadget</li>
                  <li className='foo'>Electronics</li>
                  <li className='foo'>Fashion</li>
                  <li className='foo'>General</li>
                  <li className='foo'>Shoes</li>
                  <li className='foo'>Sports</li>
                  <li className='foo'>Watch</li>
                  <li className='foo'>Woman Clothes</li>
                </ul>
              </div>

              {/* COMPANY & ABOUT */}
              <div className="footer-subsection">
                <h4>COMPANY</h4>
                <ul>
                  <li className='foo'>About</li>
                  <li className='foo'>Careers</li>
                  <li className='foo'>Help</li>
                  <li className='foo'>Contact</li>
                </ul>
                </div>
                <div className="footer-subsection">
                <h4>ABOUT</h4>
                <ul>
                  <li className='foo'>Who We Are</li>
                  <li className='foo'>Reviews</li>
                  <li className='foo'>Contact</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Contact & Payment */}
          <div className="footer-sections">
            <h3>Happy to help</h3>
            <p>1279 Thorn Street, NY</p>
            <p>Phone: 307-549-2480</p>
            <p>Mail: demo@gmail.com</p>
            <div className="social-icons">
              <span><FaFacebook size={24}/></span>
              <span><FaXTwitter size={24}/></span>
              <span><FaLinkedin  size={24}/></span>
              <span><FiInstagram size={24}/></span>
            </div>
            <h3>ACCEPT FOR</h3>
            <div className="payment-icons">
              <span><img src={ payment } alt="" /></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
