import { Link } from "react-router-dom"; // Correct import for Link
import "./footer.styles.scss";
import React from "react"; // No need to destructure Link here
import { supabase } from "../../config/supabase_client";
import { useEffect, useState } from "react";

const Footer = () => {
    const [portfolioLinks, setPortfolioLinks] = useState({});

    useEffect(() => {
        const getPortfolioLinks = async () => {
            const { data, error } = await supabase.from("links").select();

            if (error) {
                console.log(error);
            }

            if (data) {
                setPortfolioLinks(...data);
            }
        };
        getPortfolioLinks();
    });
    return (
        <footer className="footer">

            <p className="details">Get In Touch</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 further-info">
                        <div className="email-info">
                            <p className="font-size-24">Email:</p>
                            <a
                                className="email-link font-size-24"
                                href="mailto:atikrangnekar28@gmail.com"
                            >
                                atikrangnekar28@gmail.com
                            </a>
                        </div>

                        <div className="location-info">
                            <p className="font-size-24">Location:</p>
                            <p className="location font-size-24">
                                Maharashtra, India
                            </p>
                        </div>

                        <div className="phone-info">
                            <p className="font-size-24">Phone:</p>
                            <Link
                                className="phone-link font-size-24"
                                href="tel:+917888187782"
                            >
                                +91 78881-87782
                            </Link>
                        </div>

                        <div className="social-contact-4">
                            <Link
                                className="btn btn-outline-light"
                                to={portfolioLinks.instagram}
                                target="_blank"
                            >
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link
                                className="btn btn-outline-light "
                                style={{ marginLeft: "12px" }}
                                to={portfolioLinks.github}
                                target="_blank"
                            >
                                <i className="fab fa-github"></i>
                            </Link>
                            <Link
                                className="btn btn-outline-light"
                                style={{ marginLeft: "12px" }}
                                to={portfolioLinks.linkedin}
                                target="_blank"
                            >
                                <i className="fab fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rights">
                <p className="copy-right">
                    © Copyright <b>Atik</b>. All Rights Reserved
                </p>
                <p className="design-by">Designed by Atik Salim Rangnekar</p>{" "}
                {/* Changed class to className */}
            </div>
        </footer>
    );
};

export default Footer;
