import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import lottie from "lottie-web";
import "./contact.css";
const ContactOption = () => {
  const form = useRef();
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../src/contact.json"),
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scc4syc",
        "template_q8qlxfb",
        form.current,
        "qc_Ni7uhFiTorgBLV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          e.target.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <body className="text-gray-100 px-8 py-12 my-10 mb-10" id="contact">
      <h2 className="text-4xl font-semibold text-fuchsia-500">Contact Me</h2>
      <div className="flex">
        <div className="max-w-[50rem] mt-10  grid gap-8 md:px-12  mx-auto bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-gray-900 rounded-lg shadow-lg">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex justify-between">
                <div className="my-3">
                  <span className="uppercase text-sm text-fuchsia-500 font-bold">
                    Full Name
                  </span>
                  <input
                    className="w-10%  bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="text"
                    name="user_name"
                    placeholder=""
                  />
                </div>
                <div className="my-3">
                  <span className="uppercase text-sm text-fuchsia-500 font-bold">
                    Email
                  </span>
                  <input
                    className="w-10% bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                    type="email"
                    name="user_email"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="mt-8">
                <span className="uppercase text-sm text-fuchsia-500 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white mt-2 p-3 rounded-2xl focus:outline-none focus:shadow-outline"
                  name="message"
                ></textarea>
              </div>
              <div className="mt-5 ">
                <input
                  type="submit"
                  value="Send Message"
                  className="my-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-teal-300 hover:from-fuchsia-600 hover:via-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center animate-ping animate-bounce"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ContactOption;
