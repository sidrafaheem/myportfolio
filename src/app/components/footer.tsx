
import React from "react";
import Link from "next/link"
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';
// import { IoLogoVercel} from 'react-icons/io';


const Footer = () => {
  return (
    <div className="bg-purple-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
            <span className="ml-3 text-xl">PORTFOLIO </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 my portfolio file  —
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
            target="-blank"
             href={"https://www.linkedin.com/in/sidra-faheem-938653304/"}className="text-gray-500">
              <IoLogoLinkedin className="text-3xl hover:text-blue-500"/>
            </Link>
            <Link
            target="-blank"
             href={"#"} className="ml-3 text-gray-500">
              <IoLogoGithub className="text-3xl hover:text-black"/>
             
            </Link>
            
            
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
