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
                        <Link>
                            <FaFacebook className='link-icon'></FaFacebook>
                        </Link>
                        <Link>
                            <FaTwitter className='link-icon'></FaTwitter>
                        </Link>
                        <Link>
                            <FaInstagram className='link-icon'></FaInstagram>
                        </Link>
                        <Link>
                            <FaLinkedin className='link-icon'></FaLinkedin>
                        </Link>

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