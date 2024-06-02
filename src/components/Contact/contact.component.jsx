import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import React, { useEffect, useState } from "react";

import {
  ContactComponent,
  ContactContent,
  ContactButton,
  InputEmail,
  InputArea,
  InputText,
  SocialContact,
} from "./contact.styles";
import { Link } from "react-router-dom";

const Contact = () => {
  const [message, setMessage] = useState("");
  return (
    <ContactComponent>
      <Header>Contact me</Header>

      <ContactContent>
        <form>
          <InputEmail
            className="input_email"
            type="email"
            placeholder="Enter email address"
            required
          />

          <InputArea>
            <InputText
              className="input_text"
              onChange={(event) => setMessage(event.target.value)}
              type="textarea"
              placeholder="Enter text"
              required
            />
          </InputArea>
          <ContactButton
            className="contact-button1"
            type="button"
            value="submit"
          />
        </form>




      </ContactContent>

    </ContactComponent>
  );
};

export default Contact;
