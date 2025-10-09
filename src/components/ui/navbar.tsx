import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // screen width detection
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // -------------------------------------------------------------
  // 🔹 MOBILE VERSION
  // -------------------------------------------------------------
  if (isMobile) {
    return (
      <>
        {/* Spacer for scroll */}
        <div className={`z-[-10] ${isScrolled ? "h-[12vh]" : "h-[20vh]"}`}></div>

        {/* Navbar */}
        <header
          className={`fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-gray-200 transition-all duration-300 ${
            isScrolled ? "h-[12vh]" : "h-[18vh]"
          }`}
        >
          <div className="relative flex items-center justify-between px-4 h-full">
            {/* Hamburger Button */}
            <button
              id="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none z-50"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Centered Logo */}
            <img
              src="/group-32-3.png"
              alt="JMB Resort Logo"
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain transition-all ${
                isScrolled ? "h-8" : "h-12"
              }`}
            />

            {/* Spacer */}
            <div className="w-6"></div>
          </div>
        </header>

        {/* Slide-in Sidebar Menu */}
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-white/70 backdrop-blur-xl shadow-lg z-40 transform transition-transform duration-500 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <nav className="flex flex-col mt-[15vh] items-start px-6 text-black font-bold [font-family:'Inria_Serif',Helvetica] gap-6 text-lg">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-gray-600">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-600">
              About Us
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-gray-600">
              Gallery
            </a>
            <a href="#virtual-tour" onClick={() => setMenuOpen(false)} className="hover:text-gray-600">
              Virtual Tour
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-white text-black rounded-lg shadow-[0px_0px_6px_2px_#00000030] px-4 py-2 font-bold hover:bg-gray-50 transition-all"
            >
              Book Now!
            </button>
          </nav>
        </div>

        {/* Overlay & Push Content */}
        <div
          className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Push page content slightly when menu is open */}
        <div
          className={`transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-[75%] sm:translate-x-[60%]" : "translate-x-0"
          }`}
        >
          {/* Page content goes here if needed */}
        </div>
      </>
    );
  }

  // -------------------------------------------------------------
  // 🔹 DESKTOP VERSION
  // -------------------------------------------------------------
  return (
   <>
    <div className={` z-[-10] ${
        isScrolled ? 'h-[16vh]' : 'h-[24vh]'
      }`}></div>
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'h-[16vh] bg-white ' : 'h-[24vh] bg-white'
    }`}>
      {/* make header relative so we can absolutely position the centered logo */}
      <div className="relative w-full h-full flex items-center justify-between px-4 md:px-6">
      
    
      
      <nav className={`flex [font-family:'Inria_Serif',Helvetica] font-bold text-black gap-4 ${
        isScrolled ? 'text-sm' : 'text-lg'
      }`}>
        <a href="#home" className="hover:text-gray-600">Home</a>
        <a href="#about" className="hover:text-gray-600">About us</a>
        <a href="#gallery" className="hover:text-gray-600">Gallery</a>
        <a href="#virtual-tour" className="hover:text-gray-600">Virtual Tour</a>
      </nav>

      {/* centered logo: absolutely centered inside the header container */}
      <img
        className={`pointer-events-none absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain transition-all ${
          isScrolled ? 'h-16' : 'h-24'
        }`}
        alt="JMB Resort Logo"
        src="/group-32-3.png"
        aria-hidden="true"
      />

      <button className={`bg-white text-black rounded-[10px] shadow-[0px_0px_7px_4px_#00000040] [font-family:'Inria_Serif',Helvetica] font-bold hover:bg-gray-50 transition-all ${
        isScrolled ? 'w-28 py-1 text-sm' : 'w-32 py-2 text-base'
      }`}> 
        Book Now!
      </button>
      </div>
    </header>
    <div className={`fixed z-10 left-0 right-0 bg-gradient-to-b from-white to-transparent  ${isScrolled ? 'top-[16vh] h-[10vh]' : 'top-[24vh] h-[20vh]'}`}>
     
    </div>
    </>
  );
};

export default Navbar;
