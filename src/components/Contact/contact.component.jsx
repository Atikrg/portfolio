import "./contact.component.css"
import React, { useEffect, useState } from 'react'

const Contact = ()=>{

  const [message, setMessage] = useState('');
 return(
  <div className="contactComponent" id="#contactme">
    <div className="contact-header">
      <p>Contact me</p>
    </div>

    <div className="contact-footer">
      <form>
        <div className="inputEmail">
          <input className="input_email" type="email" placeholder="Enter email address" required/>
        </div>
        <div className="inputArea">
          <textarea className="input_text" onChange={(event)=> setMessage(event.target.value)} type = "textarea" placeholder="Enter text" required/>
        </div>
        <div className="contact-button">
          <input className="contact-button1" type="button" value="submit"/>
        </div>
      </form>
    </div>
  </div>
 )
}

export default Contact;