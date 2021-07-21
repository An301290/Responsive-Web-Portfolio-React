import React from "react";
import emailjs from "emailjs-com";
import "./styles/Form.css";
import { Button } from "./Button";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_siz2he2",
        "template_5ozqs7r",
        e.target,
        "user_lxADyR9jLXM2ABwk8CsUh"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={sendEmail} className="form">
          <h1>Contact Me</h1>
          <br></br>
          <div className="input-container">
            <h2>Name</h2>
            <input type="text" name="name"></input>
            <h2>Email</h2>
            <input type="email" name="user_email"></input>
            <h2>Message</h2>
            <textarea name="message" rows="5"></textarea>
            <input type="submit" value="send"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;

//import npm i emailjs-com
