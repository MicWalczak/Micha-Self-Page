import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
 /* const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = FormData;
  const handleChargeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (*/
    <>
      <h2 className="head-text">
        If you are interested in working with me,
        <br /> please see the links below or send me an e-mail
      </h2>
      <div class="colorLine075"></div>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:maikiwebdesign@gmail.com" className="p-text">
            {" "}
            Maikiwebdesign@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a
            href="https://api.whatsapp.com/send/?phone=48884837792&text&type=phone_number&app_absent=0"
            className="p-text">
            {" "}
            WhatsApp
          </a>
        </div>
      </div>

      {/* {!isFormSubmitted?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type='text' placeholder="Your Name" name="name" value={name} onChange={handleChargeInput} required/>
        </div>
        <div className="app__flex">
          <input className="p-text" type='email' placeholder="Your Email" name="email" value={email} onChange={handleChargeInput} required/>
        </div>
        <div>
          <textarea className="p-text"
          placeholder="Your Message"
          value={message}
          name='message'
          onChange={handleChargeInput}
          required
          />
        </div>
        <button type="button " className="p-text" onClick={handleSubmit}>{loading?'Sending':'Send Message'}</button>
      </div>
      : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
