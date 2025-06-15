import React, { useState } from "react";
import { Header } from "../ProjectCardPreview/project-card-preview.styles";
import {
    ContactComponent,
    ContactContent,
    ContactButton,
    InputEmail,
    InputArea,
    InputText,
} from "./contact.styles";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_WEB3_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Message sent successfully!");
            event.target.reset();
        } else {
            console.error("Error:", data);
            setResult(`❌ ${data.message}`);
        }
    };

    return (
        <ContactComponent id="contact">
            <Header>📬 Contact Me</Header>

            <ContactContent onSubmit={onSubmit} as="form">
                <center className="text-white">Will contact within 12 hours</center>
                <InputEmail
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    required
                />

                <InputArea>
                    <InputText
                        as="textarea"
                        rows="6"
                        placeholder="Your message..."
                        name="message"
                        required
                    />
                </InputArea>

                <ContactButton type="submit">Send Message</ContactButton>

                <div style={{ marginTop: "16px", color: "#ccc" }}>
                    {result && <p>{result}</p>}
                </div>
            </ContactContent>
        </ContactComponent>
    );
};

export default Contact;
