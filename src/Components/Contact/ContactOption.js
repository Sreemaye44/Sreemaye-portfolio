
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import lottie from 'lottie-web'

const ContactOption = () => {
  const form = useRef();
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../src/contact.json')
    })
  }, [])

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_scc4syc', 'template_q8qlxfb', form.current, 'qc_Ni7uhFiTorgBLV')
        .then((result) => {
            console.log(result.text);
            alert('message sent');
            e.target.reset();
          console.log('message sent')
        }, (error) => {
          console.log(error.text);
        });
    }
      
    return (
        
<body className="text-gray-100 px-8 py-12" id='contact'>
     
      <div
        className="max-w-screen-lg mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-gray-900 rounded-lg shadow-lg">
       
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <span className="uppercase text-sm text-fuchsia-500 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" name="user_name" placeholder=""/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-fuchsia-500 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" name="user_email"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-fuchsia-500 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
          </div>
          <div className="mt-8">
            <input type="submit" value="Send Message"
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            </input>
            </div>
            
          </form>
        
          <div className='text-white flex flex-col items-center justify-center'>
            <h1>Address: Dhaka, Bangladesh</h1>
            <h1>Email: sreemaye44@gmail.com</h1>
            <h1>Phone no: +8801878048591</h1>
         </div>
          
        </div>
    </body>
    );
};

export default ContactOption;