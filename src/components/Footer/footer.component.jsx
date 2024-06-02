import { Link } from "react-router-dom"; // Correct import for Link
import "./footer.styles.scss";
import React from "react"; // No need to destructure Link here

import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialContact } from "../Contact/contact.styles";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="details">Get In Touch</p>
      <div className="further-info">
        <div className="email-info">
          <p>Email:</p>
          <a className="email-link" href="mailto:atikrangnekar28@gmail.com">
            atikrangnekar28@gmail.com
          </a>
        </div>

        <div className="location-info">
          <p>Location:</p>
          <p className="location">Maharashtra, India</p>
        </div>

        <div className="phone-info">
          <p>Phone:</p>
          <a className="phone-link" href="tel:+917888187782">
            +91 78881-87782
          </a>
        </div>
        <SocialContact>
          <Link style={{color:'black'}} to="https://www.instagram.com/root.codes/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>

          <Link style={{color:'black'}} to="https://github.com/Atikrg" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>

          <Link style={{color:'black'}} to="https://www.linkedin.com/in/atikrangnekar/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </SocialContact>
      </div>

      <div className="rights">
        <p className="copy-right">
          © Copyright <b>Atik</b>. All Rights Reserved
        </p>
        <p className="design-by">Designed by Atik Salim Rangnekar</p> {/* Changed class to className */}
      </div>
    </footer>
  );
};

export default Footer;
