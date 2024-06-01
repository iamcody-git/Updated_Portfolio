import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="mt-28 py-20 text-center flex flex-col items-center">
  <div className="flex items-center">
    <div className="footer-content">
      <p className="text-base">&copy; {new Date().getFullYear()} Cody. All rights reserved.</p>
    </div>
    <div className="social ml-8">
      <a href="www.linkedin.com/in/prashant-adhikari009" className="mr-4">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 hover:text-gray-800 w-5 h-5"/>
      </a>
      <a href="https://github.com/iamcody-git">
        <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-800 w-5 h-5"/>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
