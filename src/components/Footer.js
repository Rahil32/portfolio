import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {AiOutlineDribbble} from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  const footerIcon = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedinIn size={17} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahil200997/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={17} />
        </>
      ),
      href: "https://github.com/Rahil32",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={17} />
        </>
      ),
      href: "https://mail.google.com/",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={17} />
        </>
      ),
      href: "https://drive.google.com/file/d/1unZuhmhvpt1iopfglu8JwWkB1eaDHBLw/view?usp=sharing",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          <AiOutlineDribbble size={17} />
        </>
      ),
      href: "https://dribbble.com/Pranshuta",
      download: true,
    },
  ];

  return (
    <div>
      <footer className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to="Home"
            smooth
            duration={500}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 cursor-pointer"
          >
            <span className="ml-3 mb-1 text-2xl font-bold text-amber-800 font  hover:text-amber-600 cursor-pointer font-style">Pranshuta</span>
          </Link>
          <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 Pranshuta
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {footerIcon.map(({ id, child, href, download }) => (
              <a
                key={id}
                href={href}
                download={download}
                rel="noreferrer"
                target="_blank"
                className="m-2 cursor-pointer  text-amber-800 font  hover:text-amber-600"
              >
                {child}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;