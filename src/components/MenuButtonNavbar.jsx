import { useState } from 'react';
import { Link } from 'react-scroll'; 

export default function MenuButtonNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Konfigurasi scroll 
  const scrollProps = {
    smooth: true,
    duration: 500,
    spy: true,
    activeClass: "text-blue-400", // Warna saat section tersebut aktif
    offset: -70 // Menyesuaikan tinggi navbar agar tidak menutupi judul section
  };

  return (
    <nav className="fixed top-0 w-full p-4 bg-black shadow-md z-[100]">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-roboto text-white font-bold cursor-pointer">
          Hilmi Mithwa
        </div>

        {/* Desktop Menu */}
        <ul className="hidden min-[430px]:flex space-x-8 text-white font-medium">
          <li>
            <Link to="about" {...scrollProps} className="cursor-pointer hover:text-gray-400 transition">About Me</Link>
          </li>
          <li>
            <Link to="skills" {...scrollProps} className="cursor-pointer hover:text-gray-400 transition">Skills</Link>
          </li>
          <li>
            <Link to="projects" {...scrollProps} className="cursor-pointer hover:text-gray-400 transition">Projects</Link>
          </li>
          <li>
            <Link to="social" {...scrollProps} className="cursor-pointer hover:text-gray-400 transition">Social Media</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 min-[430px]:hidden"
        >
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 min-[430px]:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col p-10 pt-20 space-y-6 text-white text-lg">
          <li>
            <Link onClick={() => setIsOpen(false)} to="about" {...scrollProps} className="cursor-pointer hover:text-gray-400">About Me</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="skills" {...scrollProps} className="cursor-pointer hover:text-gray-400">Skills</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="projects" {...scrollProps} className="cursor-pointer hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="social" {...scrollProps} className="cursor-pointer hover:text-gray-400">Social Media</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}