import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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