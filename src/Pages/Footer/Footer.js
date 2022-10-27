import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5'>

            <div className="footer-basic">
                <footer>
                    <div className="social">
                        <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='link-icon'></FaFacebook>
                        </a>
                        <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='link-icon'></FaTwitter>
                        </a>
                        <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='link-icon'></FaInstagram>
                        </a>
                        <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='link-icon'></FaLinkedin>
                        </a>

                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link>Privacy Policy</Link>
                        </li>
                    </ul>
                    <p className="copyright">Distance Learning © 2022 @ Rajani Kanta Das</p>
                </footer>
            </div>

        </div>
    );
};

export default Footer;