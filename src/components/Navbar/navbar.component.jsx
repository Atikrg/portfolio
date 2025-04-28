import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../config/supabase_client";
import "./navbar.styles.css";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [portfolioLinks, setPortfolioLinks] = useState({});
    const [sticky, setSticky] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbar-component ${sticky ? "sticky-navbar" : ""}`}>
            <header>
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <span className="logo-highlight">Atik's</span> Portfolio
                </a>

                {/* Hamburger Button */}
                <button
                    onClick={toggleVisibility}
                    className={`button-close ${visible ? "open" : ""}`}
                    aria-label="Toggle Navigation"
                >
                    {visible ? (
                        <FontAwesomeIcon className="menu-icon" icon={faXmark} />
                    ) : (
                        <FontAwesomeIcon className="menu-icon" icon={faBars} />
                    )}
                </button>

                {/* Navbar */}
                <nav className={`navbar ${sticky ? "sticky" : ""}`}>
                    <ul className={`navbar-list ${visible ? "open" : ""}`}>
                        <li className="navbar-link">
                            <AnchorLink href="#home" className="nav-link">
                                Home
                            </AnchorLink>
                        </li>
                        <li className="navbar-link">
                            <a
                                href={portfolioLinks.resume}
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                        <li className="navbar-link">
                            <AnchorLink href="#projects" className="nav-link">
                                My Work
                            </AnchorLink>
                        </li>
                        <li className="navbar-link">
                            <AnchorLink href="#experiences" className="nav-link">
                                Experiences
                            </AnchorLink>
                        </li>
                        <li className="navbar-link">
                            <AnchorLink href="#about" className="nav-link">
                                About Me
                            </AnchorLink>
                        </li>
                        <li className="navbar-link">
                            <AnchorLink href="#contact" className="nav-link">
                                Contact Me
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
