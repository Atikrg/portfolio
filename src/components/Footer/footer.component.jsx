import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss"; // Assuming you are using SCSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <p className="details">Get In Touch</p>
                </div>

                <div className="footer-content container">
                    <div className="row">
                        <div className="col-md-5 contact-info">
                            <div className="contact-item">
                                <p className="info-title">Email:</p>
                                <a
                                    className="info-link"
                                    href="mailto:atikrangnekar28@gmail.com"
                                >
                                    atikrangnekar28@gmail.com
                                </a>
                            </div>

                            <div className="contact-item">
                                <p className="info-title">From:</p>
                                <p className="info-text">India</p>
                            </div>


                            <div className="social-contact">
                                <Link className="social-btn" to="https://www.linkedin.com/in/atikrangnekar/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link className="social-btn" style={{ marginLeft: "12px" }} to="https://github.com/Atikrg" target="_blank">
                                    <i className="fab fa-github"></i>
                                </Link>
                                <Link className="social-btn" style={{ marginLeft: "12px" }} to="https://twitter.com/RangnekarAtik" target="_blank">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </Link>
                            </div>

                        </div>

                        <div className="col-md-7 about-info">
                            <p className="about-text">
                                Atik is a passionate developer with expertise in full-stack development, machine learning, and blockchain. I create modern, high-performance websites and applications to help businesses scale and grow. Let's work together to bring your ideas to life!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copy-right">
                        © Copyright <b>Atik</b>. All Rights Reserved
                    </p>
                    <p className="design-by">Designed by Atik Salim Rangnekar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
