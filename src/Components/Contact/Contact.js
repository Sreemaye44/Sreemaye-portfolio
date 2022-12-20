
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_scc4syc', 'template_q8qlxfb', form.current, 'qc_Ni7uhFiTorgBLV')
      .then((result) => {
        console.log(result.text);
        console.log('message sent')
      }, (error) => {
        console.log(error.text);
      });
  }
    return (
    
        <div id='contact'>
             <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
            
        </div>
    );
};

export default Contact;