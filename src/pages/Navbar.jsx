import React, { useEffect, useRef, useState } from 'react';
import images from '../assets/images';
import Button from '../compent/Button';
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const sideMenuRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef(null);

  // Mobile Menu Functions
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  };

  // Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasBackground(true);
        navLinksRef.current?.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
      } else {
        setHasBackground(false);
        navLinksRef.current?.classList.add('text-black', 'shadow-sm', 'bg-opacity-50', 'bg-white-500');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center  justify-between px-[4%] py-3 transition-all duration-300 ${
        hasBackground ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : 'bg-white bg-opacity-10'
      }`}
    >
      {/* Logo */}
      <div>
        <img src={images.logo} alt="Logo" className="w-[140px]" />
      </div>

      {/* Desktop Links */}
      <ul
        ref={navLinksRef}
        className="flex gap-8 text-lg max-sm:hidden transition-all"
      >
        {['home', 'about', 'dish', 'offer', 'menu', 'ingredients'].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="hover:text-first transition-all duration-500 capitalize"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Booking Button (Desktop) */}
      <div className="max-sm:hidden flex items-center gap-4">
        <Button text="Booking A Table" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="sm:hidden">
        <button onClick={openMenu} className="text-2xl">☰</button>
      </div>

      {/* Side Menu (Mobile) */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 w-[200px] text-white h-full bg-first transition-transform duration-300 transform translate-x-full z-50"
      >
        <div className="p-4 relative">
          <button onClick={closeMenu} className="text-2xl top-7 absolute right-3 border border-white rounded-full p-2 mb-4"><MdOutlineRestaurantMenu /></button>
          <ul className="flex flex-col gap-4 mt-20 text-xl font-bold">
            {['home', 'about', 'dish', 'offer', 'menu', 'ingredients'].map((link) => (
              <li key={link}>
                <a href={`#${link}`} onClick={closeMenu} className="capitalize">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
