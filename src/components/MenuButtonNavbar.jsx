import { useState } from 'react';

export default function MenuButtonNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-black shadow-md relative">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* LOGO */}
        <div className="text-xl font-roboto text-white font-bold">Hilmi Mithwa</div>

        {/* --- 1. MENU DESKTOP --- */}
        {/* Muncul hanya jika layar >= 428px */}
        <ul className="hidden min-[430px]:flex space-x-8 text-white font-medium">
          <li><a href="#" className="hover:text-gray-400 transition">About Me</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Skills</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Projects</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Social Media</a></li>
        </ul>

        {/* --- 2. BURGER BUTTON (MOBILE ONLY) --- */}
        {/* Hilang jika layar >= 428px */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50 min-[430px]:hidden"
        >
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* --- 3. MOBILE MENU PANEL --- */}
      {/* PERBAIKAN: Gunakan min-[428px]:hidden agar panel ini lenyap di layar lebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 min-[430px]:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col p-10 pt-20 space-y-6 text-white text-lg">
          <li><a onClick={() => setIsOpen(false)} href="#" className="hover:text-gray-400">About Me</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#" className="hover:text-gray-400">Skills</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#" className="hover:text-gray-400">Projects</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#" className="hover:text-gray-400">Social Media</a></li>
        </ul>
      </div>
    </nav>
  );
}