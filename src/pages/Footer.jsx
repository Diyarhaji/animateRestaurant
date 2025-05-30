import React from 'react';
import images from '../assets/images';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bgthree text-white py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Logo & About */}
        <div>
          <img src={images.logo} alt="Restaurant Logo" className="w-40 mb-4" />
          <p className="text-sm text-gray-400">
            Taste the best dishes from our top chefs. Fresh ingredients, cozy atmosphere, and unforgettable moments.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="flex items-center gap-2"><FaLocationDot /> Kurdistan, Iraq</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /><a href="tel:+9647511978863">+9647511978863</a></li>
            <li className="flex items-center gap-2"><IoMdMail /><a href="mailto:diyargohdarhaji@gmail.com">diyargohdarhaji@gmail.com</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="#offer" className="hover:text-white">Offers</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Diyar Haji. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
