import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", link: "#home" },
    {
      name: "Skills",
      icon: "barbell-outline",
      dis: "translate-x-16",
      link: "#skill",
    },
    {
      name: "Projects",
      icon: "cube-outline",
      dis: "translate-x-32",
      link: "#projects",
    },
    {
      name: "About",
      icon: "person-outline",
      dis: "translate-x-48",
      link: "#about",
    },
    {
      name: "Contact",
      icon: "mail-outline",
      dis: "translate-x-64",
      link: "#contact",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="flex justify-center py-5 px-4">
      <div className=" bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg text-white  max-h-[4.4rem] px-6 rounded-t-xl">
        <ul className="flex relative">
          <span
            className={`bg-teal-500 duration-500 ${Menus[active].dis} border-4 border-slate-300 h-16 w-16 absolute
             -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
              rounded-tr-[11px]"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
              rounded-tl-[11px]"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                href={menu.link}
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] pr-5 pl-5 duration-300 bg-fuchsia-500">
            <a
              href="https://www.linkedin.com/in/sreemaye-chakrabortty-73ab85134/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] pr-5 pl-5 duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Sreemaye44"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] pr-5 pl-5 duration-300 bg-teal-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#contact"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  pr-5 pl-5 duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1eqdM_KBQewrw6MXHQNOO-EAfCVLDOayB/view?usp=sharing"
              download="Sreemaye Chakrabortty"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
