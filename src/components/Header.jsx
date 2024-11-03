import Logo from '../assets/img/logo.svg';
import { CgMenuRight } from 'react-icons/cg';
import Nav from './Nav'
import NavMobile from './NavMobile'
import { useEffect, useState } from 'react';
import Program from './Program';
export default function Header() {
    const[bg,setBg]=useState(false);
    const[NavMobile,SetNavMobile]=useState(true)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setBg(true):setBg(false);
        })
    })
  return (
    <header className={`${bg?'bg-white py-3 shadow-md':'bg-none py-5'} fixed w-full right-0 left-0 z-10 transition-all duration-300`}>
               <div className="container mx-auto">
                <a href="" className="">
                    <img src={Logo} alt="" className="" />
                </a>
                <div className="hidden lg:flex">
                    <Nav/>
                </div>
                <Program/>
                <div className="cursor-pointer lg:hidden">
                    <CgMenuRight className='text-3xl text-right'/>
                </div>
                <div className={`${navMobile?'h-[260px]':''} fixed bg-yellow shadow-lg left-0 w-full top-[78px] h-full overflow-hidden transition-all`}>
                    <NavMobile/>
                </div>
               </div>
    </header>
  )
}
