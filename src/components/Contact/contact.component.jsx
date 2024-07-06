import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import React from "react";

import {
    ContactComponent,
    ContactContent,
    ContactButton,
    InputEmail,
    InputArea,
    InputText,
} from "./contact.styles";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_WEB3_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <ContactComponent>
            <Header id="contact">Contact me</Header>

            <ContactContent>
                <form onSubmit={onSubmit}>
                    <InputEmail
                        className="input_email"
                        type="email"
                        placeholder="Enter email address"
                        required
                        name="email"
                    />

                    <InputArea>
                        <InputText
                            className="input_text"
                            type="textarea"
                            placeholder="Enter text"
                            name="message"
                            required
                        />
                    </InputArea>
                    <ContactButton
                        className="contact-button1"
                        type="submit"
                        value="submit"
                    />
                </form>
            </ContactContent>
            <center>{result}</center>
        </ContactComponent>
    );
};

export default Contact;
