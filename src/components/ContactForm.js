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
        <div className="label-container">
          <h1>Contact Me</h1>
          <div className="input-container">
            <form onSubmit={sendEmail}>
              <br></br>
              <label>Name</label>
              <input type="text" name="name"></input>
              <br></br>
              <label>Email</label>
              <input type="email" name="user_email"></input>
              <br></br>
              <label>Message</label>
              <textarea name="message" rows="5"></textarea>
              <input type="submit" value="send"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

//import npm i emailjs-com
