import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Professional menu icons
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Navbar() {
   const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#020617] text-white sticky top-0 z-50 px-6 lg:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>
           <h1>Klean <span className="text-[#b8895a]"> <em>Dash.com</em></span></h1>
          </Link>
        </div>

        {/* Desktop Links - Hidden on Mobile */}
        <ul className="hidden md:flex gap-9 items-center">
          <li className="hover:text-var(--kraft)-300 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-var(--kraft)-300 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-var(--kraft)-300 transition-colors">
            <Link to="/work">Work</Link>
          </li>
          <li className="hover:text-var(--kraft)-300 transition-colors">
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <button
              className="bg-[#b8895a] text-black font-bold py-2 px-5 rounded-md hover:bg-orange-200 transition-all"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Hamburger Icon - Visible on Mobile Only */}
        <div
          className="md:hidden text-3xl cursor-pointer text-orange-200"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-gray-800 animate-fadeIn">
          <ul className="flex flex-col p-6 gap-6 text-lg border-t border-gray-800">
            <li onClick={toggleMenu}>
              <Link to="/" className="block">
                Home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about" className="block">
                About
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/work" className="block">
                Work
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/#services" className="block">
                Services
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contact" className="block">
                Contact
              </Link>
            </li>
            <li>
              <button
                className="w-full bg-var(--kraft)-300 text-black font-bold py-3 rounded-md"
              
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
