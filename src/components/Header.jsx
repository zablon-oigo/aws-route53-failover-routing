import Logo from '../assets/img/logo.svg';
import { CgMenuRight } from 'react-icons/cg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { useEffect, useState } from 'react';
import Program from './Program';
export default function Header() {
  const [bg, setBg] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${bg ? 'bg-white py-3 shadow-md' : 'bg-none py-5'} fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-10" />
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
        <Program />
        <div onClick={() => setIsNavMobileOpen(!isNavMobileOpen)} className="cursor-pointer lg:hidden">
          <CgMenuRight className="text-3xl text-right" />
        </div>
        <div
          className={`${isNavMobileOpen ? 'h-[260px]' : 'h-0'} lg:hidden fixed bg-yellow shadow-lg left-0 w-full top-[78px] overflow-hidden transition-all duration-300 ease-in-out`}>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
