'use client';

import React,{useEffect,useState} from 'react'; // Importing React is optional in newer versions of React (17+ with JSX Transform)
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';


const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(()=>{
    const scrollYPos = window.addEventListener('scroll' , ()=>{
      window.scrollY > 50? setHeader(true) : setHeader(false)
    })
    return ()=> window.removeEventListener('scroll',scrollYPos)
  })




  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent': 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-tertiary'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center"> {/* Corrected class name from "justify-between-items-center" to "justify-between items-center" */}
          <Logo />
          <div className="flex items-center gap-x-6">
          <Nav containerStyles='hidden xl:flex gap-x-8' linkStyles='relative hover:text-primary transition-all' underLineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'   />
          <ThemeToggler />
          <div className='xl:hidden' >
            <MobileNav />
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
