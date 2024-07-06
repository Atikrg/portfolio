import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../config/supabase_client";
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [portfolioLinks, setPortfolioLinks] = useState({});
    const toggleVisibility = () => {
        setVisible(!visible);
    };

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
        <div className="navbar-component">
            <header>
                <button
                    onClick={() => toggleVisibility()}
                    className="button-close text-center"
                    aria-label="Toggle Navigation"
                >
                    {visible ? (
                        <FontAwesomeIcon
                            className = "menu-icon"
                            icon={faXmark}
                            style={{ border: "none" }}
                        />
                    ) : (
                        <FontAwesomeIcon
                        className = "menu-icon"
                        icon={faBars} />
                    )}
                </button>

                <nav className={`navbar ${visible ? "open" : "close"}`}>
                    <ul className={"navbar-list"}>
                        <li className="navbar-link">
                            <AnchorLink href="#home" className="nav-link">
                                Home
                            </AnchorLink>
                        </li>

                        <li className="navbar-link">
                            <a
                                href={portfolioLinks.upwork}
                                className="nav-link "
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                upwork
                            </a>
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
                            <AnchorLink
                                href="#experiences"
                                className="nav-link"
                            >
                                Experiences
                            </AnchorLink>
                        </li>

                        <li className="navbar-link">
                            <AnchorLink href="#about" className="nav-link">
                                About me
                            </AnchorLink>
                        </li>

                        <li className="navbar-link">
                            <AnchorLink href="#contact" className="nav-link">
                                Contact me
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
