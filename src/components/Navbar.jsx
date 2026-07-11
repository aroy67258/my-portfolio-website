import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-4 shadow-lg shadow-black/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-xl font-extrabold tracking-wider"
        >
          <span className="bg-gradient-to-r from-cyanCustom to-purpleCustom bg-clip-text text-transparent">ANUPAM</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a 
                  href={link.href}
                  className="text-slate-300 hover:text-cyanCustom transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyanCustom to-purpleCustom group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-4"
          >
            <a 
              href="https://github.com/aroy67258" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyanCustom transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-full border border-slate-800"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anupam-kumar-41655b296/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-purpleCustom transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-full border border-slate-800"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-semibold rounded-full border border-cyanCustom/50 text-cyanCustom hover:bg-cyanCustom hover:text-darkNavy transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-cyanCustom transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full glassmorphism border-t border-slate-800/50 mt-4 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 space-y-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-300 hover:text-cyanCustom py-2 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-slate-800 flex items-center space-x-6">
                <a 
                  href="https://github.com/aroy67258" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-cyanCustom transition-colors duration-300"
                >
                  <FaGithub size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/anupam-kumar-41655b296/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-purpleCustom transition-colors duration-300"
                >
                  <FaLinkedinIn size={22} />
                </a>
                <a 
                  href="mailto:anupamroy11a@gmail.com" 
                  className="text-slate-400 hover:text-cyanCustom transition-colors duration-300"
                >
                  <FaEnvelope size={22} />
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full py-2.5 rounded-xl bg-gradient-to-r from-cyanCustom to-purpleCustom text-white font-semibold hover:shadow-lg hover:shadow-cyanCustom/20 transition-all duration-300"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
